import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-connectus',
  templateUrl: './connectus.page.html',
  styleUrls: ['./connectus.page.scss'],
})
export class ConnectusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openwebsite()
  {
    Browser.open({url: 'https://www.varunpublicschool.com/'})
  }
}
