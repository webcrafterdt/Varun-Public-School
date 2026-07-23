import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-teachconnectus',
  templateUrl: './teachconnectus.page.html',
  styleUrls: ['./teachconnectus.page.scss'],
})
export class TeachconnectusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openwebsite()
  {
    Browser.open({url: 'https://www.varunpublicschool.com/'})
  }
}
