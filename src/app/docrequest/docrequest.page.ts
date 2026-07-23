import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { DocrequestService } from 'src/app/services/docrequest.service';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-docrequest',
  templateUrl: './docrequest.page.html',
  styleUrls: ['./docrequest.page.scss'],
})
export class DocrequestPage implements OnInit {
  category:any;
  ionicForm: FormGroup;
  public Remark  = '';
  public certificate = '';
  status :any;
  message :any;


  request_date:any;
  
  applied_doc_requests: any=[];
  document_master:any=[];
  applied_doc_requests_length:any;
  constructor(private toast:ToastService,public formBuilder: FormBuilder,private ionLoaderService: IonLoaderService,private docrequestservice: DocrequestService) { }
     
  ngOnInit() {
    this.category = 'reqstd_doc';
    this.ionicForm = this.formBuilder.group({
      certificate: ['', [Validators.required]],
      Remark: ['', [Validators.required]]
      
    });



    this.ionLoaderService.simpleLoader();
    this.docrequestservice.applied_doc_request().subscribe((res) =>{
      console.log('applied applied_doc_requests --> ',res);
      this.status = res['status'];
      this.message=res['message'];
      if(res['status'] == true)
      {
   this.applied_doc_requests = res['data']['Requests'];
   this.document_master = res['data']['Documents'];
   this.applied_doc_requests_length = res['data']['Requests'].length;
   console.log('this.document_master ==>',this.document_master);
      //this.circulars_object = Object.keys(res['data']);
      console.log('this.applied_doc_requests ==>',this.applied_doc_requests);



      console.log('this.message applied_doc_requests==>',this.message);
      
      this.status= res.status;
      console.log('applied_doc_requests this.status====>',this.status);
      }
      
      this.ionLoaderService.dismissLoader();
    });
  }

  opefile(filename)
  {
    console.log('filename ==>',filename);
    
      Browser.open({url: filename})
  }

    apply_doc_request()
    {
      console.log('this.doc_id==>',this.certificate);
      console.log('this.remark==>',this.Remark);
      
  
      this.docrequestservice.submit_request(this.certificate,this.Remark).subscribe((res) =>{
        console.log('applied leaves --> ',res);
        this.status = res['status'];
        this.message=res['message'];
        
        
        this.toast.presentToast(this.message);
        this.ngOnInit();
      });
      this.ionLoaderService.dismissLoader();
    }

/*  SubmitRequest()
  {
    console.log('this.Remark ==>',this.Remark);
    console.log('this.certificate ==>',this.certificate);
  }*/

}
