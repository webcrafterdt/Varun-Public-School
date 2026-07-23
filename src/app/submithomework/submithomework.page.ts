import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//import { ContentChange, QuillEditorComponent } from 'ngx-quill';
import { Router } from "@angular/router";
import { SubmithomeworkService } from 'src/app/services/submithomework.service';
import {  MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-submithomework',
  templateUrl: './submithomework.page.html',
  styleUrls: ['./submithomework.page.scss'],
})
//export class SubmithomeworkPage implements OnInit {
  export class SubmithomeworkPage implements AfterViewInit {
  title:any;
  post:null;
  homeworkhtml:any;
  homework_master_id:any;
  homework_tran_id:any;
  public htitle   = '';
 
  //@ViewChild(QuillEditorComponent) editor : QuillEditorComponent
  constructor(private route: ActivatedRoute,private router: Router,private submithomeworkservice: SubmithomeworkService,public menuCtrl: MenuController,
    private storage: StorageService,private ionLoaderService: IonLoaderService,private toastservice:ToastService) {
      this.homework_master_id =this.route.snapshot.paramMap.get('id1');
      this.homework_tran_id =this.route.snapshot.paramMap.get('id2');
      console.log('this.homework_master_id ==>',this.homework_master_id);
     }

  ngOnInit() {
    this.title =this.route.snapshot.paramMap.get('id');




  }

  ngAfterViewInit():void {
  //  console.log('Here We Are data ==>',this.editor);
//    this.editor.onContentChanged.subscribe((change: ContentChange)=>{
//      console.log('changed data ==>', change);
//    });
  }
  onContentChanged = (event) =>{
   // console.log('event=====>',event);
    if (event.html) {
      // Do whatever you want here
      console.log('The content has changed', event.html);
      this.homeworkhtml=event.html;
    }
  } 
  
  submit_homework()
  {
    console.log('Submit HomeWork ==>',this.homeworkhtml);
    console.log('Submit htitle ==>',this.htitle);
    console.log('this.homework_master_id ==>',this.homework_master_id);
    console.log('this.homework_tran_id ==>',this.homework_tran_id);
    this.submithomeworkservice.submithomework(this.homework_master_id,this.homework_tran_id,this.htitle,this.homeworkhtml).subscribe((res) =>{
    console.log('data here ==>',res);
    if(res['status'] == true)
    {
      this.toastservice.presentToast(res['message']);
      this.router.navigate(["/homework"]);

    }
    });

  }

}


