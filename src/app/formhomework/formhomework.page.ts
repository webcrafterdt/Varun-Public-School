import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { FeesService } from 'src/app/services/fees.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MarkattendanceService } from 'src/app/services/markattendance.service';
import { AssignhomeworkService } from 'src/app/services/assignhomework.service';
import { ContentChange, QuillEditorComponent } from 'ngx-quill';
import { ActionSheetController } from '@ionic/angular';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-formhomework',
  templateUrl: './formhomework.page.html',
  styleUrls: ['./formhomework.page.scss'],
})
export class FormhomeworkPage implements OnInit {
  session: any;
  f_id: any;
  college: any;
  ionicForm: FormGroup;
  Class_Data: any = [];
  fname: any;
  imgpath: any;
  name: any;
  image: any;
  localimage: any;
  user_hostel: any;
  studentname: any;
  fromDate: any;
  toDate: any;
  dateParts: any;
  dateParts_to: any;
  details: any = [];
  fromdate: any;
  Final_Due_Amount_ArrayObject: any = [];
  TotalDue_Amount: any;
  TotalPaidRangeWise: any;
  TotalPaid_Amount_OD: any;
  display: any;
  fromdate_post: any;
  todate_post: any;
  SessStart: any;
  SessEnd: any;
  sessioncaption: any;
  display_till_date: any;
  CurrentDate: any;
  totalstudents: any;
  presentstudents: any;
  Final_Due_Amount_Array: any = [];
  ToDate: any;
  currentDate: any;
  transid: any;
  responseJson: any = [];
  ExamArray: any = [];
  ClassName: any = [];
  SubjectArray: any = [];
  examsubdivid: any;
  category: any;
  status: any;
  message: any;
  HomeworkSubjects: any = [];
  TeacherSubjectList: any = [];
  Transids: any = [];
  base64image: any;
  imageData: any;
  attachmentmessage: any;
  todate: any;
  CompletionDate: any;
  title:any;
  homeworkhtml:any;
  htmlcont:any;
  allowedFileTypes:any=[];
  selectedFileNames:any;
  base64DataArra:any;
  base64DataArray:any;
  SubjectId:any;
  quillData: string;
  attachmentUploadLocationArray: any;

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  @ViewChild(QuillEditorComponent) editor: QuillEditorComponent
  constructor(public formBuilder: FormBuilder, private toastservice:ToastService,public actionSheetController: ActionSheetController,  private feeservice: FeesService, private assignhomeworkservice: AssignhomeworkService, private attstudentlist: MarkattendanceService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);

    this.Transids = JSON.parse(this.route.snapshot.paramMap.get('id'));
    this.SubjectId = JSON.parse(this.route.snapshot.paramMap.get('id1'));

    console.log("here is subject IDs ==>",JSON.parse(this.route.snapshot.paramMap.get('id1')));
    


    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      quillData: ['', [Validators.required]]
    })

    this.name = localStorage.getItem('name');
    this.studentname = localStorage.getItem('studentname');

    //this.imgpath = this.route.snapshot.paramMap.get('id2');  
    console.log('herrrr 11--xxx>', localStorage.getItem('first_name'));
    //console.log('herrrr 22-->',this.route.snapshot.paramMap.get('id2'));  
    //const ret = await Preferences.get({ key: 'sid' });
    console.log("==--==-->",)
    //console.log('first_nname 11-->',Preferences.get({ key: 'first_name' }))

    console.log('first 11====>', this.todate_post);
  }

  ngOnInit() {

    console.log("this.Transids==>", this.Transids);
    this.category = 'applicationlist';
    //this.ionLoaderService.simpleLoader();
    this.assignhomeworkservice.HomeworkClasses().subscribe((res) => {
      console.log('homeworkclasses here -->', res);
      this.status = res['status'];
      this.message = res['HomeWorkClassMessage'];
      this.TeacherSubjectList = res['TeacherSubjectList'];
      console.log('this.TeacherSubjectList====>', this.TeacherSubjectList);


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



        /**************************Homework uploading starts*****************************/
        triggerPdfInput(index: number) {
          console.log("xcxcxcxcxc  ssss",index);
          // this.attachmentUploadLocationArray=attachment_upload_location;
          // console.log('this.attachmentUploadLocationArray',this.attachmentUploadLocationArray);
      //    const pdfInput = document.getElementById(`pdfInput${index}_${fileIndex}`) as HTMLInputElement;
          const pdfInput = document.getElementById(`pdfInput`) as HTMLInputElement;
          if (pdfInput) {
              pdfInput.value = ''; // Clear the input value
              pdfInput.click(); // Trigger the file input click
          }
      }
      
      async onFileSelect(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
      
        this.allowedFileTypes = [
         'text/plain', // .txt files
          'application/pdf', // .pdf files
          'application/msword', // .doc files
         'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx files
          'image/jpeg', // .jpg and .jpeg files
          'image/png' // .png files
      ];
      
      
        
      
        // Check if the file type is allowed
        if (!this.allowedFileTypes.includes(file.type)) {
            alert('Invalid file type. Please select a valid file. '+this.allowedFileTypes);
            return false;
        }
      
        if (file) {
            // Check file size (10 MB limit)
            //if (file.size > 10485760) {
              //5 MB Limit
              
              if (file.size > 5242880) { 
                alert('File size exceeds 10 MB. Please select a smaller file.');
                return false;
            } else {
                // Store the selected file name in the array
                // if (!this.selectedFileNames[index]) {
                //     this.selectedFileNames[index] = []; // Initialize if not already done
                // }
                this.selectedFileNames = file.name; // Store the file name for the specific homework index and file index
      
                // Initialize base64Data array if not already done
                
                // if (!this.base64DataArray) {
                //     this.base64DataArray = []; // Create the array to store base64 data
                // }

                // if (!this.base64DataArray[index]) {
                //     this.base64DataArray[index] = []; // Initialize if not already done
                // }
      
                // Read the file as base64
                const reader = new FileReader();
                reader.onload = async () => {
                    const base64File = reader.result as string;
                    const base64Data = base64File.split(',')[1];
      
                    // Store the base64 data in the array
                   // this.base64DataArray[index][fileIndex] = base64Data; // Store the base64 data for the specific homework index and file index
                   this.base64DataArray = base64Data;
      
      
                  // this.base64DataArray[index] = attachment_upload_location;
                    // Save the file to the appropriate directory
                    const directory = this.platform.is('android') ? Directory.External : Directory.Documents;
                    await Filesystem.writeFile({
                        path: this.selectedFileNames,
                        data: base64Data,
                        directory: directory,
                    });
      
                    console.log("Selected file name:", this.selectedFileNames);
                    console.log("Selected files heree:", this.selectedFileNames);
                    console.log("Base64 data stored:", this.base64DataArray);
                    console.log("Selected this.base64datavalue:", base64Data);
                };
      
                reader.readAsDataURL(file);
            }
        }
      }
        /**************************Homework uploading ends*******************************/
























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

    let CompDate = todate.substring(0, 10).split("-");
    this.CompletionDate = CompDate[0] + '-' + CompDate[1] + '-' + CompDate[2];
    console.log('this.CompletionDate====>', this.CompletionDate);
    this.todate = this.changeDateFormat_to(todate);

  }
  



  onContentChanged = (event) =>{
     console.log('event=====>',event);

     if (event.html) {
       // Do whatever you want here
       console.log('The content has changed', event.html);
       this.homeworkhtml=event.html;
       
     }
   } 


   assignhomework()
   {
     console.log('this.htmlcont====>', this.htmlcont);
      
     
     console.log('this.CompletionDate====>', this.CompletionDate);
     console.log('this.title====>', this.title);
     
     console.log('this.homeworkhtml==>', this.homeworkhtml);
     console.log('this.homeworkhtml==>', this.homeworkhtml);
     console.log('this.base64image hereee==>', this.base64image);
     if(this.title == undefined)
     {
       this.toastservice.presentToast('Please Enter Title ..!!');
       return false;
     }
 
     if(this.CompletionDate == undefined)
       {
         this.toastservice.presentToast('Please Enter Completion Date ..!!');
         return false;
       }
 
     if(this.homeworkhtml == undefined)
      {
       this.toastservice.presentToast('Please Enter Detail ..!!');
       return false;
      }
 
     this.assignhomeworkservice.AssignHomework(this.Transids,this.SubjectId,this.title,this.homeworkhtml,this.CompletionDate,this.base64DataArray,this.selectedFileNames).subscribe((res) => {
       console.log("here is response of homework===>",res);
       console.log("here is response of this.SubjectId===>",this.SubjectId);
       //newhomework
       this.status =res['status'];
       this.message= res['message'];
       this.toastservice.presentToast(this.message);
       
        if(this.status == true)
       {
         this.CompletionDate = '';
         this.Transids = '';
         this.SubjectId = '';
         this.title = '';
         this.homeworkhtml = '';
         this.base64image = '';
         this.quillData = '';
         this.dateParts_to = '';
         this.ngOnInit();
         this.router.navigate(["/newhomework"]);
         
       }
 
       
       
       
     });
         
   }



    ProceedToHomeWork(subid) {
    console.log("Subject Idsss ==>", subid);
    console.log('this.Transidsaaa--->', JSON.stringify(this.Transids));

    console.log("this.base64image ==>", this.base64image);
    
  }

  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }

}
