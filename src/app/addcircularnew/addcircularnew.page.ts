import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LeaveapplicationService } from 'src/app/services/leaveapplication.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { CircularService } from 'src/app/services/circular.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { ContentChange, QuillEditorComponent, QuillModules } from 'ngx-quill';
import { IonRouterOutlet, Platform } from '@ionic/angular';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
@Component({
  selector: 'app-addcircularnew',
  templateUrl: './addcircularnew.page.html',
  styleUrls: ['./addcircularnew.page.scss'],
})
export class AddcircularnewPage implements OnInit {
  category: any;
  fromdate: any;
  todate: any;
  dateParts: any;
  dateParts_to: any;
  status: any;
  message: any;
  applied_leaves: any = [];
  public title = '';
  public reason = '';
  ionicForm: FormGroup;
  CircularContent: any;
  FileExists: any;
  selectedFileName: any;
  base64datavalue: any;
  userImg: any;
  hideimagediv: any;
  attachfile:any;
  quillData:any;
  //@ViewChild(QuillEditorComponent) editor: QuillEditorComponent
  constructor(private toast: ToastService, private platform: Platform, private circularservice: CircularService, private Leaveapplicationservice: LeaveapplicationService, private router: Router, private ionLoaderService: IonLoaderService,
    public formBuilder: FormBuilder) {
    this.CircularContent = '';
    this.base64datavalue = ' ';

  }

  ngOnInit() {
    this.category = 'applicationlist';
    //this.ionLoaderService.simpleLoader();
    this.Leaveapplicationservice.applied_leaves().subscribe((res) => {
      console.log('applied leaves --> ', res);
      this.status = res['status'];
      this.message = res['message'];

      this.applied_leaves = res;
      //this.circulars_object = Object.keys(res['data']);
      console.log('this.applied_leaves ==>', this.applied_leaves);



      console.log('this.message ==>', this.message);

      this.status = res.status;
      console.log('this.status====>', this.status);


      this.ionLoaderService.dismissLoader();
    });
    //this.ionLoaderService.dismissLoader();


    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      title: ['', [Validators.required]],
      reason: ['', [Validators.required]]

    })
  }

  ionViewWillEnter()
  {
    this.title = '';
    this.CircularContent = '';
    this.dateParts = '';
    this.dateParts_to = '';
    this.selectedFileName = '';
    this.base64datavalue = '';
    this.attachfile= '';
    this.quillData= '';
  }
  ngAfterViewInit(): void {
    //console.log('Here We Are data ==>', this.editor);
//    this.editor.onContentChanged.subscribe((change: ContentChange) => {
//      console.log('changed data ==>', change);
//    });
  }
  onContentChanged = (event) => {
    // console.log('event=====>',event);
    if (event.html) {
      // Do whatever you want here
      console.log('The content has changed', event.html);
      //this.homeworkhtml=event.html;
      this.CircularContent = event.html;

      console.log('The content this.CircularContent', this.CircularContent);
    }
  }
//  quillModules: QuillModules = {
//    toolbar: [
//      [{ 'header': [1, 2, false] }],
//      ['italic', 'underline', 'bold'], // Removed 'bold'
//      ['blockquote', 'code-block'],
//      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//      [{ 'script': 'sub' }, { 'script': 'super' }],
//      [{ 'indent': '-1' }, { 'indent': '+1' }],
//      [{ 'direction': 'rtl' }],
//      [{ 'size': ['small', false, 'large', 'huge'] }],
//      [{ 'color': [] }, { 'background': [] }],
//      [{ 'font': [] }],
//      [{ 'align': [] }],
//      ['clean'] // Removed 'image'
//    ]
//  };

  apply_leave() {
    console.log('this.title==>', this.title);
    console.log('this.reason==>', this.reason);
    console.log('this.from==>', this.dateParts);
    console.log('this.to==>', this.dateParts_to);


    this.Leaveapplicationservice.apply_leave(this.title, this.reason, this.dateParts, this.dateParts_to).subscribe((res) => {
      console.log('applied leaves --> ', res);
      // this.status = res['status'];
      // this.message = res['message'];


      //this.toast.presentToast(this.message);
      this.toast.presentToast(res['response']);
      this.ngOnInit();
      this.title = ' ';
      this.reason = ' ';
      this.dateParts = ' ';
      this.dateParts_to = ' ';
    });
    this.ionLoaderService.dismissLoader();

  }

  submitcircular() {
    console.log('this.fromdate====>', this.dateParts);
    console.log('this.todate====>', this.dateParts_to);
    // return false;
    if (!this.dateParts) {
      this.toast.presentToast('From Date Cannot Be Empty..!!');
      return false
    }
    else if (!this.dateParts_to) {
      this.toast.presentToast('To Date Cannot Be Empty..!!');
      return false
    }
    else if (!this.dateParts_to) {
      this.toast.presentToast('Title Cannot Be Empty..!!');
      return false
    }

    else if (!this.CircularContent) {
      this.toast.presentToast('Description Cannot Be Empty..!!');
      return false
    }
    else {
      if(this.base64datavalue)
        {
          this.base64datavalue=this.base64datavalue;
        }
        else
        {
          this.base64datavalue='';
        }
      this.circularservice.submitcircular(this.title, this.CircularContent, this.dateParts, this.dateParts_to,this.selectedFileName, this.base64datavalue).subscribe((res) => {
        console.log("submit HomeWork", res);
        this.toast.presentToast(res);
        if (res == 'Circular Inserted Succesfully') {
          this.router.navigate(["/addcircular"]);
        }

      })
    }


  }



  triggerPdfInput() {
    const pdfInput = document.getElementById('pdfInput') as HTMLInputElement;
    if (pdfInput) {
      console.log("hereererer");
      pdfInput.value = '';
      this.FileExists = 'Y';
      pdfInput.click();
      console.log("this.FileExists==>", this.FileExists);

    }
  }



  async onFileSelect(event) {
    console.log("xxxxxxx==>", event.target.files[0]);
    console.log("event xxxxxxx==>", event);
    const file = event.target.files[0];


    const allowedFileTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/gif',
      'image/bmp',
      'image/png',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ];

    // Check if the file type is allowed
    if (!allowedFileTypes.includes(file.type)) {
      alert('Invalid file type. Please select a valid file.');
      return false;
    }


    if (file) {

      if (file.size > 1048576) {
        //if (file.size > 10485) {
        alert('File size exceeds 1 MB. Please select a smaller file.');
        return false;
      }
      else {
        this.userImg = '';
        this.selectedFileName = file.name;
        // Read the file as base64
        const reader = new FileReader();
//        reader.onload = async () => {
//          const base64File = reader.result as string;
//          // Save the entire base64 data with prefix
//          this.base64datavalue = base64File;
//          // this.savedata(this.base64datavalue);
//   // If you need to save the file without the base64 prefix
//          const base64Data = base64File.split(',')[1];
//
//          // Save the file to the appropriate directory
//          const directory = this.platform.is('android') ? Directory.External : Directory.Documents;
//          const result = await Filesystem.writeFile({
//            path: this.selectedFileName,
//            data: base64Data,
//            directory: directory,
//          });
//
//          // Get the file URI
//          this.hideimagediv = 'block';
//          console.log("Selected this.base64datavalue:", this.base64datavalue);
//          console.log("Selected this.selectedFileName:", this.selectedFileName);
//]          // this.selectedFilePath = result.uri;
//          // console.log("Selected file path:", this.selectedFilePath);
//          // console.log("result file path:", JSON.stringify(result));
//          // Upload the file
//          //this.uploadFile();
//
//
//
//        };

        reader.readAsDataURL(file);
      }
    }
  }


  changeDateFormat_from(date: string) {

    console.log('dateParts====>', this.dateParts);
    this.dateParts = date.substring(0, 10).split("-");
    this.dateParts = this.dateParts[2] + '-' + this.dateParts[1] + '-' + this.dateParts[0];
    if (this.dateParts == 'undefined-undefined-') {
      console.log('date==-->', date);
      this.dateParts = ' ';
    }
    else {
      this.dateParts = this.dateParts;
    }

    //  var ddMMYYYYDate = new Date(+this.dateParts[2]  +this.dateParts[0]);
    // var ddMMYYYYDate = dateParts[2]+'-'+dateParts[1]+'-'+dateParts[0] ;
    // return ddMMYYYYDate;
  }

  from_date(fromdate) {
    console.log('fromdate====>', fromdate);
    this.fromdate = this.changeDateFormat_from(fromdate);
    console.log('this.fromdate====>', this.fromdate);
  }






  changeDateFormat_to(date: string) {

    console.log('dateParts====>', this.dateParts_to);
    this.dateParts_to = date.substring(0, 10).split("-");
    this.dateParts_to = this.dateParts_to[2] + '-' + this.dateParts_to[1] + '-' + this.dateParts_to[0];
    if (this.dateParts_to == 'undefined-undefined-') {
      console.log('date==-->', date);
      this.dateParts_to = ' ';
    }
    else {
      this.dateParts_to = this.dateParts_to;
    }

  }

  to_date(todate) {
    console.log('fromdate====>', todate);
    this.todate = this.changeDateFormat_to(todate);
    console.log('this.todate====>', this.todate);
  }



}


