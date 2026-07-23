import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AssignhomeworkService } from 'src/app/services/assignhomework.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-newhomework',
  templateUrl: './newhomework.page.html',
  styleUrls: ['./newhomework.page.scss'],
})
export class NewhomeworkPage implements OnInit {
  category: any;
  fromdate: any;
  todate: any;
  dateParts: any;
  dateParts_to: any;
  status: any;
  message: any;
  applied_leaves: any = [];
  public title = '';
  public reason = '';
  ionicForm: FormGroup;
  HomeworkClasses:any= [];
  TransIds:any=[];
  homeworklist:any=[];
  constructor(private toastservice: ToastService, private assignhomeworkservice: AssignhomeworkService, private router: Router, private ionLoaderService: IonLoaderService,
    public formBuilder: FormBuilder) { }




  opefile(filename)
  {
    console.log('filename ==>xxxx',filename);
    console.log('path here =>','192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+filename);
   // Browser.open({url: 'http://192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+filename})
      Browser.open({url: filename})
  }


    ionViewWillEnter()
    {

      this.category = 'applicationlist';
      //this.ionLoaderService.simpleLoader();
      this.assignhomeworkservice.HomeworkClasses().subscribe((res) => {
        console.log('homeworkclasses here -->', res);
        this.status =res['status'];
        this.message = res['HomeWorkClassMessage'];
        this.HomeworkClasses=res['Classes'];
        console.log('this.HomeworkClasses====>', this.HomeworkClasses);
    
            console.log('this.status====>', this.status);
  
  
        this.ionLoaderService.dismissLoader();
      });
      //this.ionLoaderService.dismissLoader();

      this.category = 'applicationlist';
    //this.ionLoaderService.simpleLoader();
    this.assignhomeworkservice.HomeworkList().subscribe((res) => {
      console.log('homeworkclasses list -->', res);
      this.status = res['status'];
      this.homeworklist=res['data'];
      
      console.log('this.homeworklist -->', this.homeworklist);
      
      
      this.ionLoaderService.dismissLoader();
    });
    }

  ngOnInit() {





    
    




    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      title: ['', [Validators.required]],
      reason: ['', [Validators.required]]

    })
  }

  decodeHtml(html: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
  }


  gettransids(transids)
  {
     const index = this.TransIds.indexOf(transids);
    if (index !== -1) {
      this.TransIds.splice(index,1);
    }
    else{
      this.TransIds.push(transids);
    }
    console.log('this.TransIds ==>',this.TransIds);
  }



  
  ProceedToSubject()
  {
    let id =this.TransIds;
    console.log('id trans =',id);
    console.log('id trans length =',id.length);
    if(id.length > 0)
    {
      this.router.navigate(['/homeworksubjects',JSON.stringify(id)]);
    }
    else
    {
      this.toastservice.presentToast('Please Select Class ..!! ');
    }
    
    //this.router.navigate(["/teachsecfees",id,id1]);
  }
}