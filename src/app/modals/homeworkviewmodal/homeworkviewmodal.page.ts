import { Component, OnInit } from '@angular/core';
import { IonModal,ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-homeworkviewmodal',
  templateUrl: './homeworkviewmodal.page.html',
  styleUrls: ['./homeworkviewmodal.page.scss'],
})
export class HomeworkviewmodalPage implements OnInit {
   homework: any[] = []; // 🔹 yaha aapko data mil jayega

  constructor(public modalController: ModalController,private navParams: NavParams) { }

  ngOnInit() {
    
    this.homework=this.navParams.get('homework');
    console.log('this.filteredHomework==>',this.homework);
  }
  opefile(filename)
  {
      Browser.open({url: filename})
  }
  async closeModel() {
     const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }


  decodeHtml(html: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  let decoded = txt.value;
  // Remove wrapping <p> tags
  decoded = decoded.replace(/^<p>/i, '').replace(/<\/p>$/i, '');
  return decoded;
}
}




















