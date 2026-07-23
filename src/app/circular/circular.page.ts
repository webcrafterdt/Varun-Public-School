import { Component, OnInit } from '@angular/core';
import { CircularService } from 'src/app/services/circular.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { Browser } from '@capacitor/browser';
import { IonModal,ModalController } from '@ionic/angular';
import { StudycontentmodalPage } from '../modals/studycontentmodal/studycontentmodal.page';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-circular',
  templateUrl: './circular.page.html',
  styleUrls: ['./circular.page.scss'],
})
  export class CircularPage implements OnInit {
  circulars:any=[];
  status:any;
  message:any;
  circulars_object:any=[];
  messagge:any;
  circulardetail:any;
  constructor(private homeworkservice: CircularService,private router: Router,private ionLoaderService: IonLoaderService,public modalController: ModalController) { }
    
  opefile(filename)
  {
    console.log('filename ==>',filename);
    console.log('circular file path here =>','//192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+filename);
  //  Browser.open({url: 'http://192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+filename})
      Browser.open({url: filename})
  }

  transform(value: string) {
    console.log('value====>',value);
    var datePipe = new DatePipe("en-US");
     value = datePipe.transform(value, 'dd-M-yyyy');
     
     return value;
 }

  async msgprint(content)
  {
  console.log('content ==>',content);
  

  const modal = await this.modalController.create({
    component: StudycontentmodalPage,
    cssClass: 'my-custom-class',
    componentProps: { value: content }
  });
  return await modal.present();
  }

  ngOnInit() {
   //  this.ionLoaderService.simpleLoader();\\192.168.2.4\College_development\neotia\app\webroot\upload\student_assignment
  // this.ionLoaderService.simpleLoader();
    this.homeworkservice.circular().subscribe((res) =>{
      console.log('circular --> ',res);
      this.status = res['status'];
      this.messagge=res['messagge'];
      this.circulars = res;
      console.log('this.circulars ==>',this.circulars);
      if(res['status'] == true)
      {

      
      
    
      this.circulars_object = Object.keys(res['data']);
      console.log('this.circulars_object ==>',this.circulars_object);


      this.message = res.messagge;
      console.log('this.message ==>',this.message);
      
      this.status= res.status;
      console.log('this.status====>',this.status);
      }
      this.ionLoaderService.dismissLoader();
      
    })
  }


  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '.....<span>Read More</span>' :
           string;
  }
}
  