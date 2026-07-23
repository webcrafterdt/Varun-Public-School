import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core/components';
import { StudycontentService } from 'src/app/services/studycontent.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { IonModal,ModalController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { Browser } from '@capacitor/browser';
import { StudycontentmodalPage } from '../modals/studycontentmodal/studycontentmodal.page';

@Component({
  selector: 'app-contentdetail',
  templateUrl: './contentdetail.page.html',
  styleUrls: ['./contentdetail.page.scss'],
})
export class ContentdetailPage implements OnInit {
  studycontent_detail:any=[];
  id:any;
  file_url:any;
  //truncating: boolean;
  showMore: false;
  contentdetail:any;
  content_title:any;
  @ViewChild(IonModal) modal: IonModal;
  constructor(private studycontentservice: StudycontentService,private router: Router,private ionLoaderService: IonLoaderService,
    private route: ActivatedRoute,public modalController: ModalController) { }

  ngOnInit() {
    this.ionLoaderService.simpleLoader();
  //  Browser.open({ url: 'https://www.youtube.com/watch?v=ZzaPdXTrSb8' });
    this.id =this.route.snapshot.paramMap.get('id');    	
    console.log('id==>',this.id);

    this.studycontentservice.studycontent().subscribe((res) =>{
      console.log('jai shreenath ji studycontent --> ',res);
      this.studycontent_detail = res['data'][this.id]['StudyContentFileTran'];
      this.content_title = res['data'][this.id]['StudyContent'].title;
      //this.studycontent_detail = res['data'];
      console.log('this.studycontent studycontent_detail==>',this.studycontent_detail);
      
      this.ionLoaderService.dismissLoader();
      
    })
  }
 async msgprint(content)
  {
  console.log('content ==>',content);
  this.contentdetail=content;

  const modal = await this.modalController.create({
    component: StudycontentmodalPage,
    cssClass: 'my-custom-class',
    componentProps: { value: content }
  });
  return await modal.present();
  }




  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }




  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '.....<span>Read More</span>' :
           string;
  }


  open_videos(link)
  {
 // Browser.open({ url: link });
  const openCapacitorSite = async () => {
    await Browser.open({ url: link });
  };
  openCapacitorSite();
  }

  open_file(file)
  {
   // this.file_url='//192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+file;
  // this.file_url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg';
  //this.file_url='http://192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+file;
  console.log('file==>',file);
    Browser.open({ url: file });
  }
}
