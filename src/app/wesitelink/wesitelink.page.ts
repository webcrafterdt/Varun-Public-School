import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-wesitelink',
  templateUrl: './wesitelink.page.html',
  styleUrls: ['./wesitelink.page.scss'],
})
export class WesitelinkPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openwebsite()
  {
    Browser.open({url: 'https://www.varunpublicschool.com/'})
  }

}

