import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';
import { NoticeService } from 'src/app/services/notice.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
  notice:any=[];
  error:any;
  constructor(private noticeservice: NoticeService,private router: Router,private ionLoaderService: IonLoaderService,
    private http: HttpClient) { }

  ngOnInit() {
    this.noticeservice.notice().subscribe((res) =>{
      console.log('jai shreenath ji lacture results  notice --> ',res);
      this.notice = res['response'];
      this.error = res['error'];
      this.ionLoaderService.dismissLoader();
    })
  }

  noticefile(noticeurl)
  {
    //window.open('https://erp.luckyinstitute.org/'+noticeurl, '_system', 'location=yes');
    Browser.open({url: noticeurl})
  }

}
