import { Component, OnInit, Optional,ViewChild  } from '@angular/core';
import { MenuController,ActionSheetController,IonContent,LoadingController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { GroupchatService } from 'src/app/services/groupchat.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Browser } from '@capacitor/browser';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
@Component({
  selector: 'app-teachchatbox',
  templateUrl: './teachchatbox.page.html',
  styleUrls: ['./teachchatbox.page.scss'],
})
export class TeachchatboxPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  session: any;
  f_id: any;
  college: any;
  ionicForm: FormGroup;
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
  Final_Due_Amount_ArrayObject:any=[];
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
  classname: any;
  Final_Due_Amount_Array:any=[];
  grouplist:any=[];
  groupid:any;
  userImg:any;
  hideimagediv:any;
  chat_box:any=[];
  message_text:any;
  Student_Id:any;
  imageupdate:any;
  selectedFilePath: any;
  selectedFileName:any;
  base64datavalue:any;
  PdfFileUpdate:any;
  FileExists:any;
  downloadUrl:any;
  GroupName:any;
  downloadProgress = 0;
  chat_box_length:any = [];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder,public http:HttpClient,public loadingController: LoadingController,private camera:Camera,public actionSheetCtrl: ActionSheetController, private groupchat: GroupchatService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
      this.base64datavalue= ' ';
      this.FileExists='N';
    this.menuCtrl.enable(false);
    this.groupid =this.route.snapshot.paramMap.get('id');

    

    this.Student_Id =this.route.snapshot.paramMap.get('id1');
    
    this.GroupName =this.route.snapshot.paramMap.get('id2');

     this.SessStart = localStorage.getItem('SessStart');
    this.SessEnd = localStorage.getItem('SessEnd');
    this.CurrentDate = localStorage.getItem('CurrentDate');
    this.sessioncaption = localStorage.getItem('caption');
    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]]

    })
    console.log('this.classname--xxx>', this.classname);
    console.log('this.Student_Id--xxx>', this.Student_Id);
    
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
    
    console.log("this.Student_Id ===>",this.Student_Id);
      if(this.Student_Id)
        {
          console.log('this is student chatbox');
          this.ionLoaderService.autoLoader();
          this.groupchat.student_individual_chat(this.groupid,localStorage.getItem('tid'),this.Student_Id).subscribe((res) => {
            this.chat_box=res;
            this.chat_box_length=this.chat_box.length;
            console.log('student this.chat_box==>', this.chat_box);
            console.log('student this.chat_box_length==>', this.chat_box_length);
            
            this.content.scrollToBottom();
            
          });
        }
        else
        {
          console.log('this is teacher chatbox');
          this.ionLoaderService.autoLoader();
          this.groupchat.group_chat(this.groupid,localStorage.getItem('tid')).subscribe((res) => {
            this.chat_box=res;
            this.chat_box_length=this.chat_box.length;
            console.log('this.chat_box==>', this.chat_box);
            console.log('this.chat_box chat_box_length==>', this.chat_box_length);
            
            this.content.scrollToBottom();
            
          });
        }
    
    



  }

  ionViewDidEnter() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  async SelectPic(){
    if(this.Student_Id)
      {
        let actionSheet = await this.actionSheetCtrl.create({
          buttons: [
            {
              text: 'Take a picture',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.openCamera(1);
              }
            },
            {
              text: 'Choose pictures',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.openCamera(0);
              }
            },
            {
              text: 'Choose PDF',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.triggerPdfInput();
              }
            }
          ]
        });
        actionSheet.present();
      }
      else{
        let actionSheet = await this.actionSheetCtrl.create({
          buttons: [
            {
              text: 'Take a picture',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.openCamera(1);
              }
            },
            {
              text: 'Choose pictures',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.openCamera(0);
              }
            },
            {
              text: 'Choose PDF',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.triggerPdfInput();
              }
            }
          ]
        });
        actionSheet.present();
      }
   
    
  }


  triggerPdfInput() {
//    document.getElementById('pdfInput').value='';
    const pdfInput = document.getElementById('pdfInput') as HTMLInputElement;
    if (pdfInput) {
      console.log("hereererer");
      pdfInput.value = '';
      this.FileExists='Y';
      pdfInput.click();
      console.log("this.FileExists==>",this.FileExists);
      
    }
  }

  async onFileSelect(event) {
    console.log("xxxxxxx==>",event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      
      if (file.size > 1048576) {
      //if (file.size > 10485) {
        alert('File size exceeds 1 MB. Please select a smaller file.');
        return false;
      }
      else{
        this.userImg = '';
        this.selectedFileName = file.name;
      // Read the file as base64
      const reader = new FileReader();
//      reader.onload = async () => {
//        const base64File = reader.result as string;
//        
//        // Save the entire base64 data with prefix
//        this.base64datavalue = base64File;
//       // this.savedata(this.base64datavalue);
//  
//       
//        // If you need to save the file without the base64 prefix
//        const base64Data = base64File.split(',')[1];
//  
//        // Save the file to the appropriate directory
//        const directory = this.platform.is('android') ? Directory.External : Directory.Documents;
//        const result = await Filesystem.writeFile({
//          path: this.selectedFileName,
//          data: base64Data,
//          directory: directory,
//        });
//  
//        // Get the file URI
//        this.hideimagediv='block';
//        console.log("Selected this.base64datavalue:", this.base64datavalue);
//        console.log("Selected this.selectedFileName:", this.selectedFileName);
//    
//      };
    
      reader.readAsDataURL(file);
    }
    }
  }


  openCamera(sourceType) {
    this.selectedFileName = '';
    this.hideimagediv='block';
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
      //this.userImg = 'data:image/jpeg;base64,' + imageData;
      this.userImg = 'data:image/png;base64,' + imageData;
      console.log("this.userImg===>",this.userImg);
      
    }, (err) => {
      console.log(err);
    });
  }

  openfile(filepath)
  {
    Browser.open({ url: filepath });
  }
  
  cancelimage()
{
  this.userImg=' ';
  this.hideimagediv='none';
  this.FileExists='N';
  this.base64datavalue= '';
  this.imageupdate='';
}





  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }
  groupdetaillist(id)
  {
    console.log("Stu id====>",id);
     this.router.navigate(["/groupdetail",id]);
    
  }


  sendmessage() {
    console.log('this.message_text ==>', this.message_text);
    
    this.ionLoaderService.autoLoader(); // Show loading spinner
    if(this.userImg)
      {
       this.imageupdate= this.userImg;
      }

    if(this.selectedFileName)
      {
        this.PdfFileUpdate=this.base64datavalue;
      }

      console.log("this.PdfFileUpdate ==>",this.PdfFileUpdate);
    if(this.Student_Id)
      {
//send personal message to student
console.log("this.userIm======>",this.userImg);
    this.groupchat.send_message_individual_student(this.groupid, this.message_text, localStorage.getItem('tid'), this.imageupdate,this.Student_Id,this.PdfFileUpdate).subscribe((res1) => {
      this.chat_box = res1['response'];
      this.chat_box_length=this.chat_box.length;
      console.log('this.chat_box==>messages student ==>', this.chat_box);
    //  this.loadingController.dismiss();
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
      this.userImg = '';
      this.selectedFileName = '';
      //this.ionViewDidEnter(); // Refresh view or perform any necessary actions
      
    });

    //Individual message

    this.groupchat.send_notification_individual(this.Student_Id).subscribe((pushres) =>{
      console.log("sent suvccessfully ==>",pushres);
    })
    }
    else
    {
//send message in group message
console.log("this.userIm group======>xxxx",this.userImg);
//console.log("this.imageupdate group======>xxxx",this.imageupdate.length);


      this.groupchat.send_message(this.groupid, this.message_text, localStorage.getItem('tid'), this.imageupdate,this.PdfFileUpdate).subscribe((res1) => {
        this.chat_box = res1['response'];
        this.chat_box_length=this.chat_box.length;
        console.log('this.chat_box==>messages', this.chat_box);
      //  this.loadingController.dismiss();
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
        this.userImg = '';
        this.selectedFileName = '';
       // this.ionViewDidEnter(); // Refresh view or perform any necessary actions
        
      });

    //Group message

      this.groupchat.send_notification(this.groupid).subscribe((pushres) =>{
        console.log("sent suvccessfully ==>",pushres);
      })
    }
    
    this.message_text = ''; // Clear message text after sending



    // this.groupchat.send_notification(this.groupid).subscribe((pushres) =>{
    //   console.log("sent suvccessfully ==>",pushres);
    // })

    this.FileExists='N';
    this.base64datavalue= '';
    this.PdfFileUpdate='';
  }









  async downloadFile(url)
  {

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
//    } catch (error) {
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
      default:
        return 'application/octet-stream';
    }
  }

















  ionViewWillLeave() {
    // Handle actions or cleanup tasks when leaving the page
  
  }
  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
   // Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}

