import { Component, OnInit } from '@angular/core';
import { SubjectallottedService } from 'src/app/services/subjectallotted.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { Browser } from '@capacitor/browser';
import { IonModal,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subjectalloted',
  templateUrl: './subjectalloted.page.html',
  styleUrls: ['./subjectalloted.page.scss'],
})
export class SubjectallotedPage implements OnInit {
  status:any;
  message:any;
  Subjects:any=[];
  constructor(private subjectallottedservice: SubjectallottedService,private router: Router,private ionLoaderService: IonLoaderService,public modalController: ModalController) { }
  


  ngOnInit() {
    this.ionLoaderService.simpleLoader();
    this.subjectallottedservice.subject_allotted().subscribe((res) =>{
      console.log('subjects --> ',res);
      this.status = res['status'];
      this.message=res['message'];
      if(res['status'] == true)
      {

      
      
      this.Subjects = res['data'];
      //this.circulars_object = Object.keys(res['data']);
      console.log('this.Subjects ==>',this.Subjects);



      console.log('this.message ==>',this.message);
      
      this.status= res.status;
      console.log('this.status====>',this.status);
      }
     
      this.ionLoaderService.dismissLoader();
    });
   
  }

}
