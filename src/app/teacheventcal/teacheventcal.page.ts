import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-teacheventcal',
  templateUrl: './teacheventcal.page.html',
  styleUrls: ['./teacheventcal.page.scss'],
})
export class TeacheventcalPage implements OnInit {
  status:any;
  message:any;
  event_list:any=[];
  constructor(private eventservice: EventService,private router: Router,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
 //   this.ionLoaderService.simpleLoader();
  this.eventservice.event_list().subscribe((res) =>{
      console.log('library --> ',res);
      this.status = res[0].status;
      this.message=res[0].message;
      this.event_list = res;
      console.log('this.event_list ==>',this.event_list);
      this.ionLoaderService.dismissLoader();
    })
  }


  
}
