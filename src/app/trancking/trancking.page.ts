import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Router } from "@angular/router";
@Component({
  selector: 'app-trancking',
  templateUrl: './trancking.page.html',
  styleUrls: ['./trancking.page.scss'],
})
export class TranckingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openwebsite()
  {
    Browser.open({url: 'https://www.varunpublicschool.com/'})
  }

  BiomatricAttendance()
  {
    //this.router.navigate(["/teachstudentprofile", id]);
   // this.router.navigate(["/biomatricstafflist"]);
   this.router.navigate(["/stafftype"]);
   
  }

  
  HomeWorks()
  {
    this.router.navigate(["/homeworkstafflist"]);
  }
  

  Attendance()
  {
    this.router.navigate(["/trackingattendacneclass"]);
  }
}

//biomatricstafflist
