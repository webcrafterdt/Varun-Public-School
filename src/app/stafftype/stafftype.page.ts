import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Router } from "@angular/router";
@Component({
  selector: 'app-stafftype',
  templateUrl: './stafftype.page.html',
  styleUrls: ['./stafftype.page.scss'],
})
export class StafftypePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openwebsite()
  {
    Browser.open({url: 'https://www.varunpublicschool.com/'})
  }

  BiomatricAttendance(id)
  {
    console.log('id0000',id);
    //this.router.navigate(["/teachstudentprofile", id]);
    this.router.navigate(["/biomatricstafflist",id]);
  }

  
  HomeWorks()
  {
    this.router.navigate(["/homeworkstafflist"]);
  }
  
}

//biomatricstafflist
