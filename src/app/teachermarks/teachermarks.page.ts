import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-teachermarks',
  templateUrl: './teachermarks.page.html',
  styleUrls: ['./teachermarks.page.scss'],
})
export class TeachermarksPage implements OnInit {
  status:any;
  message:any;
  event_list:any=[];
  constructor(private eventservice: EventService,private router: Router,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
 //   this.ionLoaderService.simpleLoader();
  this.eventservice.event_list().subscribe((res) =>{
      console.log('library --> ',res);
      this.status = res['status'];
      this.message=res['message'];
      this.event_list = res;
      console.log('this.event_list ==>',this.event_list);
      this.ionLoaderService.dismissLoader();
    })
  }


  
}
