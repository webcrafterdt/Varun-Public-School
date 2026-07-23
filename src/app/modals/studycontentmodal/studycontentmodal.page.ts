import { Component, OnInit } from '@angular/core';
import { IonModal,ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-studycontentmodal',
  templateUrl: './studycontentmodal.page.html',
  styleUrls: ['./studycontentmodal.page.scss'],
})
export class StudycontentmodalPage implements OnInit {
  contentdetail:any;
  constructor(public modalController: ModalController,private navParams: NavParams) { }

  ngOnInit() {
    
    this.contentdetail=this.navParams.get('value');
    console.log('this.contentdetail==>',this.contentdetail);
  }

  async closeModel() {
     const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}
