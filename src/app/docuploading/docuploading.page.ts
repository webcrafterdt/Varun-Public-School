import { Component, OnInit,Optional } from '@angular/core';
import { IonModal,ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';
import { HomeworkService } from 'src/app/services/homework.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
import { empty } from 'rxjs';
import { Browser } from '@capacitor/browser';
import { StudycontentmodalPage } from '../modals/studycontentmodal/studycontentmodal.page';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ToastService } from 'src/app/services/toast.service';
//import { FileOpener } from '@ionic-native/file-opener/ngx';
import { IonRouterOutlet, Platform,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-docuploading',
  templateUrl: './docuploading.page.html',
  styleUrls: ['./docuploading.page.scss'],
})
export class DocuploadingPage implements OnInit {
  fromdate:any;
  todate:any;
  selectedtab:any;
  homeworks:any=[];
  Docuploadings_object:any=[];
  allowedFileTypes:any=[];
  downloadUrl = '';
  SubmitedHomeWorks:any;
  PendingHomeWorks:any;
  Submited_PendingHomeWorks:any;
  messagge:any;
  status:any;
  downloadProgress = 0;
  //datalength:any;
  FileExists: any;
  selectedFileName: any;
  //selectedFileNames: string[] = []; // Array to hold selected file names for each homework
  base64datavalue: any;
  userImg: any;
  hideimagediv: any;
  //selectedFileNames: string[][] = [];
  selectedFileNames: string[] = [];
  base64DataArray: string[] = [];
  attachmentUploadLocationArray: string[] = [];
  
  loading: boolean = true; // Add a loading flag
  datalength: number | null = null; // Initialize `datalength`
  Docuploadings:any=[];
  constructor(private alertController: AlertController,private homeworkservice: HomeworkService, private platform: Platform,private http:HttpClient,private toastservice: ToastService,private router: Router,private ionLoaderService: IonLoaderService,public modalController: ModalController) { 
     this.selectedtab='pending';
    console.log("sdsdsdd outer=>",);
   
  }

  ionViewWillLeave()
  {
    this.ionLoaderService.dismissLoader();
  }

  

  submithomework(id,id1,id2)
  {
    //this.router.navigate(["/contentdetail",id]);
    console.log('title ==>',id);
    console.log('id1 ==>',id1);
    console.log('id2 ==>',id2);
    this.router.navigate(["/submithomework",id,id1,id2]);
  }
  
  ngOnInit() {
     this.selectedFileNames = [];
    this.base64DataArray = [];

    //this.ionLoaderService.simpleLoader();
     
    this.homeworkservice.docuploading().subscribe((res) =>{
      console.log('homework 11--> ',res);
      this.Docuploadings=res['docupload'];
      console.log('this.Docuploadings-->',this.Docuploadings);
       this.Docuploadings_object=Object.keys(res['docupload']);

      this.datalength = this.Docuploadings_object.length;
      this.ionLoaderService.dismissLoader();
    })
    
  }





  triggerPdfInput(index: number,attachment_upload_location, fileIndex: number) {
    console.log("xcxcxcxcxc  ssss",index);
    this.attachmentUploadLocationArray[index]=attachment_upload_location;
    console.log('this.attachmentUploadLocationArray',this.attachmentUploadLocationArray);
//    const pdfInput = document.getElementById(`pdfInput${index}_${fileIndex}`) as HTMLInputElement;
    const pdfInput = document.getElementById(`pdfInput_${index}`) as HTMLInputElement;
    if (pdfInput) {
        pdfInput.value = ''; // Clear the input value
        pdfInput.click(); // Trigger the file input click
    }
}

async onFileSelect(event: Event, index: number,attachment_upload_location:any, fileIndex: number) {
  const file = (event.target as HTMLInputElement).files[0];
if(index != 3)
{
  this.allowedFileTypes = [
    //'text/plain', // .txt files
    'application/pdf', // .pdf files
   // 'application/msword', // .doc files
    //'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx files
   // 'image/jpeg', // .jpg and .jpeg files
   // 'image/png' // .png files
];
}
else
{
  this.allowedFileTypes = [
    'image/jpeg', // .jpg and .jpeg files
    'image/png' // .png files
];
}
  

  // Check if the file type is allowed
  if (!this.allowedFileTypes.includes(file.type)) {
      alert('Invalid file type. Please select a valid file. '+this.allowedFileTypes);
      return false;
  }

  if (file) {
      // Check file size (10 MB limit)
      //if (file.size > 10485760) {
        //1 MB Limit
        
        if (file.size > 1048576) { 
          alert('File size exceeds 10 MB. Please select a smaller file.');
          return false;
      } else {
          // Store the selected file name in the array
          // if (!this.selectedFileNames[index]) {
          //     this.selectedFileNames[index] = []; // Initialize if not already done
          // }
          this.selectedFileNames[index] = file.name; // Store the file name for the specific homework index and file index

          // Initialize base64Data array if not already done
          if (!this.base64DataArray) {
              this.base64DataArray = []; // Create the array to store base64 data
          }
          // if (!this.base64DataArray[index]) {
          //     this.base64DataArray[index] = []; // Initialize if not already done
          // }

          // Read the file as base64
          const reader = new FileReader();
//          reader.onload = async () => {
//              const base64File = reader.result as string;
//              const base64Data = base64File.split(',')[1];
//
//              // Store the base64 data in the array
//             // this.base64DataArray[index][fileIndex] = base64Data; // Store the base64 data for the specific homework index and file index
//             this.base64DataArray[index] = base64Data;
//
//
//            // this.base64DataArray[index] = attachment_upload_location;
//              // Save the file to the appropriate directory
//              const directory = this.platform.is('android') ? Directory.External : Directory.Documents;
//              await Filesystem.writeFile({
//                  path: this.selectedFileNames[index],
//                  data: base64Data,
//                  directory: directory,
//              });
//
//              console.log("Selected file name:", this.selectedFileNames[index]);
//              console.log("Selected files heree:", this.selectedFileNames);
//              console.log("Base64 data stored:", this.base64DataArray);
//              console.log("Base64 index:", index);
//              this.hideimagediv = 'block';
//              console.log("Selected this.base64datavalue:", base64Data);
//          };

          reader.readAsDataURL(file);
      }
  }
}

   async submit()
    {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to submit',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('User canceled submission');
          },
        },
        {
          text: 'Yes',
          handler: () => {
            // Code to execute if user confirms
            this.ionLoaderService.simpleLoader();
            const transid = localStorage.getItem('transid');
            const stuid = localStorage.getItem('studentid');
            console.log('stuid ==>', stuid);
            
  
            this.homeworkservice
              .DocUploading(this.base64DataArray,this.attachmentUploadLocationArray,this.selectedFileNames)
              .subscribe(
                (res) => {
                  console.log('submit HomeWork', res);
                  this.ionLoaderService.dismissLoader();
                  this.toastservice.presentToast('Attachment Uploaded Successfully');
                  this.ngOnInit();
                },
                (error) => {
                  console.error('Error submitting homework:', error);
                  this.ionLoaderService.dismissLoader();
                }
              );
            console.log('selectedFileNames here ==>', this.selectedFileNames);
            console.log('base64DataArray here ==>', this.base64DataArray);
          },
        },
      ],
    });
    await alert.present();
    }







  segmentChanged(event) {
    console.log('====>',event['detail'].value);
    this.selectedtab=event['detail'].value;
  }     
  dateChange(value)
  {
console.log('value==>',value);
  }
  
  from_date(fromdate)
  {
    console.log('fromdate==>',fromdate);
    this.fromdate=fromdate;
  }


  to_date(todate)
  {
    console.log('to_date==>',todate);
     this.todate=todate;
  }

  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '.....<span>Read More</span>' :
           string;
  }
  



  async checkFileExists(path) {
//    try {
//    //  const encodedPath = `storage/emulated/0/Documents/${encodeURIComponent('2_Orientation circular pre-primary & grade 1-2023-24.pdf')}`;
//   // const encodedPath = `storage/documents/2_Orientation circular pre-primary & grade 1-2023-24.pdf`;
//        const fileStat = await Filesystem.stat({
//        path: path,
//        directory: Directory.Documents,
//      });
//          return fileStat ? true : false;
//     } catch (error) {
//      console.log('.error==>hereeee', error);
//      return false;
//    }
  }


  private  convertBlobToBase64 = (blob:Blob) => new Promise((resolve,reject)=>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = ()  =>
    {
       resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  getMimetype(filename: string): string {
    const extension = filename.split('.').pop();
    switch (extension) {
      case 'pdf':
        return 'application/pdf';
      case 'doc':
      case 'docx':
        return 'application/msword';
      case 'xls':
      case 'xlsx':
        return 'application/vnd.ms-excel';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'image/' + extension; // Return MIME type for image files
      default:
        return 'application/octet-stream';
    }
  }








  async Attachments(upload1,upload2)
  {
  console.log('upload1 ==>',upload1);
  console.log('upload2 ==>',upload2);
  

  const modal = await this.modalController.create({
    component: StudycontentmodalPage,
    cssClass: 'my-custom-class',
    componentProps: {
      upload1: upload1,
      upload2: upload2
    }
  });
  return await modal.present();
  }


  async msgprint(content)
  {
  console.log('content ==>',content);
  

  const modal = await this.modalController.create({
    component: StudycontentmodalPage,
    cssClass: 'my-custom-class',
    componentProps: { value: content }
  });
  return await modal.present();
  }

}
