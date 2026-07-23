import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';
import {  MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public username   = '';
  public password = '';
  public session = '';
  public college = '';
  public id1 = '';
  public id2 = '';
  htmlfile:any;
  //myVariableWithTags:any;
  //safeHtml:any;
  constructor(private navCtrl: NavController,private sanitizer: DomSanitizer,private router: Router,private loginservice: LoginService,public menuCtrl: MenuController,
    private storage: StorageService,private ionLoaderService: IonLoaderService,private toastservice:ToastService/*,private camera:Camera*/) { 
    this.menuCtrl.enable(false);
    

    
//this.myVariableWithTags="<div style='padding-bottom:15px;background-color:red;'><div style='padding:5px; margin:botton:10px; background-color:#dfeeff; color:#FFF; text-align:center;'>Dear Student, Submit your ABC-ID at college counter to continue your academic year.<br>Ignore if already submitted.<br><span style='text-align:right; display:block;'>Order by Principal</span></div><hr></div>";
//this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.myVariableWithTags);
  }
  getStorage() {
   // this.storage.getObject('stdetails').then((data: any) => {
      //this.person = data;
    //});
  }
  /*captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }*/
  relatives: any[] = []; // array to store the relative data

addRelative() {
  const newRelative = { username: '', age: '', status: '', pastDate: '', contactNumber: '', aadhaarNumber: '', relation: '', sector: '', department: '', occupation: '', detail: '' };
  this.relatives.push(newRelative);
}
  signin()
  {
   // this.ionLoaderService.simpleLoader();
    
    this.loginservice.login(this.username,this.password).subscribe((res) =>{
      console.log('res of login ==>1',res);
          //if(res[0]['response'] == 'success')
    if(res[0]['tid'])
    {console.log("here wee");
    
       localStorage.setItem('DepartmentName',res[0]['DepartmentName']);
       localStorage.setItem('loggedin','Y'); 
      localStorage.setItem('DesignationName',res[0]['DesignationName']);
      localStorage.setItem('name',res[0]['name']);
      localStorage.setItem('tid',res[0]['tid']);
      localStorage.setItem('utype',res[0]['utype']);
      localStorage.setItem('mobile',res[0]['mobile']);
      localStorage.setItem('image',res[0]['photo']);
      localStorage.setItem('currentsessionid',res[0]['currentsessionid']);
      localStorage.setItem('SessStart',res[0]['SessStart']);
      localStorage.setItem('SessEnd',res[0]['SessEnd']);
      localStorage.setItem('caption',res[0]['caption']);
      localStorage.setItem('CurrentDate',res[0]['CurrentDate']);
      localStorage.setItem('add1',res[0]['add1']);
      localStorage.setItem('IsClassTeacher',res[0]['IsClassTeacher']);
      localStorage.setItem('transid',res[0]['transid']);
      localStorage.setItem('ClassArrayMarks',res[0]['ClassArrayMarks']);
      localStorage.setItem('dob',res[0]['dob']);
      localStorage.setItem('ClassSection', JSON.stringify(res[0]['ClassSection']));
      localStorage.setItem('AttendanceClassSection', JSON.stringify(res[0]['AttendanceClassSection']));
      localStorage.setItem('AttendanceClassMessage',res[0]['AttendanceClassMessage']);
      localStorage.setItem('MarksClassMessage',res[0]['MarksClassMessage']);
      
      
      //localStorage.setItem('image_name',res[0]['photo']);
      console.log('classsection name =>',res[0]['ClassSection']);
      
      this.router.navigate(["/teacherhome"]);
    }
    else if(res[0]['fname'])
      {
      console.log('res>',res);
      localStorage.setItem('studentid',res[0]['stuid']);
      localStorage.setItem('studentname',res[0]['name']);
      localStorage.setItem('registration_number',res[0]['enroll']);
      localStorage.setItem('loggedin','Y'); 
      localStorage.setItem('fathername',res[0]['pname']);
      localStorage.setItem('classname',res[0]['classname']);
      localStorage.setItem('schoolname',res[0]['schoolname']);
      localStorage.setItem('schoollogo',res[0]['image']);
      localStorage.setItem('schooladdress',res[0]['schooladdress']);
      localStorage.setItem('phoneno',res[0]['phone']);
      localStorage.setItem('mothername',res[0]['mname']);
      localStorage.setItem('address',res[0]['add1']);
      localStorage.setItem('dob',res[0]['dob']);
      localStorage.setItem('semail',res[0]['semail']);
      localStorage.setItem('stutype',res[0]['stutype']);
      localStorage.setItem('photo',res[0]['photo']);
      localStorage.setItem('fathermobile',res[0]['fmobile']);
      localStorage.setItem('mothermobile',res[0]['mmobile']);
      localStorage.setItem('gender',res[0]['gender']);
      localStorage.setItem('studentphoto',res[0]['photo']);
      localStorage.setItem('loginid',res[0]['user_name']);
      localStorage.setItem('pass',res[0]['pass']);
      localStorage.setItem('transid',res[0]['transid']);
      localStorage.setItem('fname',res[0]['fname']);
      localStorage.setItem('pemail',res[0]['pemail']);
      localStorage.setItem('classname',res[0]['classname']);
      localStorage.setItem('student_reg_details_id',res[0]['student_reg_details_id']);
      localStorage.setItem('sessionstartdate',res[0]['sessionstartdate']);
      localStorage.setItem('sessionenddate',res[0]['sessionenddate']);
        
      

      //console.log('address===>',res['data']['StudentMaster'].address);
    
    //  this.id1=localStorage.getItem('name');
  
        //this.router.navigate(["/home",this.id1,this.id2]);
        this.router.navigate(["/home"]);
      }
      else
      {console.log("xxxxx");
        this.toastservice.presentToast(res[0]['messagge']);
      }
      
      
      
    },
    err => {
      
        console.log('err=====>1',err.message);
        console.log('err=====>2',err.status);
        console.log('err=====>3',err.details);
        console.log('err=====>4',err.reason);
        
    })
    
    
  }
  ngOnInit() {

    this.loginservice.testsignup().subscribe((res) =>{
console.log("ressss=>",res);
    })
    
  }



  

}




