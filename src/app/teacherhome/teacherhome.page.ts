import { Component, OnInit,Optional } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { FeesService } from 'src/app/services/fees.service';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.page.html',
  styleUrls: ['./teacherhome.page.scss'],
})
export class TeacherhomePage implements OnInit {
  session:any;
  f_id:any;
  college:any;
  fname:any;
  imgpath:any;
  name:any;
  image:any;
  localimage:any;
  user_hostel:any;
  studentname:any;
  AppMenues:any=[];
  appPages:any=[];
  IsClassTeacher:any;
  DesignationName:any;
  transid:any;
  //public appPages = [
    // { title: 'Profile', url: '/teacherprofile', img: 'assets/user.png' },
    // { title: 'Analytics', url: '/teacherfees', img: 'assets/fee.png' },
    // { title: 'Events', url: '/teacheventcal', img: 'assets/events_1.png' },
    // { title: 'Circular', url: '/teachcircular', img: 'assets/circular1.png' },
    // { title: 'Students', url: '/teachstulist', img: 'assets/circular1.png' },
    // { title: 'Leave Application', url: '/leaveapplication', img: 'assets/leave.png' },
    // { title: 'Member Leave', url: '/leaverespond', img: 'assets/leave.png' },
    // { title: 'Groups', url: '/groups', img: 'assets/leave.png' },
    // { title: 'Attendance', url:'/teacherattendance', img: 'assets/circular1.png'},
    // { title: 'Exam Management', url:'/exam', img: 'assets/circular1.png'},
    // { title: 'Connect Us', url: '/teachconnectus', img: 'assets/connectus.png' }
//teacher menues ends




    //{ title: 'Marks', url: '/teachermarks', img: 'assets/circular1.png' },
    
     //{ title: 'Attendance', url: '/attendance', img: 'assets/attend.png' },
    //{ title: 'HomeWork', url: '/homework', img: 'assets/assignment.png' },
    //{ title: 'Fees', url: '/fees', img: 'assets/fee.png' },
    
    //{ title: 'Connect Us', url: '/connectus', img: 'assets/connectus.png' },

  /*  { title: 'Study Content', url: '/studycontent', img: 'assets/studycontent.png' },
    { title: 'Health Card', url: '/healthcard', img: 'assets/health_1.png' },
    { title: 'Library', url: '/library', img: 'assets/lib.png' },
    { title: 'Leave Application', url: '/leaveapplication', img: 'assets/leave.png' },
    { title: 'Assigned Subject', url: '/subjectalloted', img: 'assets/sub_assi.png' },
    { title: 'Change Password', url: '/changepass', img: 'assets/changepass.png' },
    { title: 'Vaccination Administer', url: '/vaccination', img: 'assets/certificate.png' },
    { title: 'Document Request', url: '/docrequest', img: 'assets/docreq.png' },
    { title: 'Result', url: '/result', img: 'assets/exam.png' }
*/

    //{ title: 'TimeTable', url: '/timetable', img: 'assets/result.png' }
   //];


  details:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public menuCtrl: MenuController, private feesservice: FeesService,private storage: StorageService,private route: ActivatedRoute,private router: Router,private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
     /*this.platform.backButton.subscribeWithPriority(-1, () => {
      console.log("xcxcxcxcxc");
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });*/
    //this.fname = this.route.snapshot.paramMap.get('id1');  
    //this.fname=localStorage.getItem('first_name');
  
    this.name=localStorage.getItem('name');
    this.studentname=localStorage.getItem('studentname');
    
    //this.imgpath = this.route.snapshot.paramMap.get('id2');  
    console.log('herrrr 11--xxx>',localStorage.getItem('first_name'));
    //console.log('herrrr 22-->',this.route.snapshot.paramMap.get('id2'));  
    //const ret = await Preferences.get({ key: 'sid' });
    
    console.log("==--==-->",)
    //console.log('first_nname 11-->',Preferences.get({ key: 'first_name' }))


    // this.feesservice.appmenu().subscribe((res) => {
    //   console.log("app menues ==>",res);
    //   //this.AppMenues=res;
    //   this.appPages=res;
    // })

    this.IsClassTeacher=localStorage.getItem('IsClassTeacher');
    this.transid=localStorage.getItem('transid');

  }

    ionViewDidEnter()
    {
      console.log('herrrr 11--xxx>',localStorage.getItem('first_name'));
      this.fname=localStorage.getItem('name');
    //  this.image='//192.168.2.4/development/college/neotia/app/webroot/'+localStorage.getItem('image');
    this.image=localStorage.getItem('image');
      this.localimage=localStorage.getItem('image_name');
      console.log('this.localimage==>',this.localimage);
     // this.ionLoaderService.dismissLoader();
     // const ret = Preferences.get({ key: 'first_name' });
     // console.log("11first_nname 11-->",ret);
      this.user_hostel=localStorage.getItem('use_hostel');
      this.ngOnInit();
    }
  ngOnInit() {

    this.feesservice.appmenu().subscribe((res) => {
      console.log("app menues ==>",res);
      //this.AppMenues=res;
      this.appPages=res;
    })
    //this.ionLoaderService.autoLoader();
    
    //this.fname=localStorage.getItem('fname');
   // this.fname=localStorage.getItem('name');
this.DesignationName=localStorage.getItem('DesignationName');
    console.log('this.first_name-cc->',localStorage.getItem('first_name'));
    console.log('this.imgpath-->',this.imgpath);
    console.log('this.user_hostel-->',this.user_hostel);
    this.exitAppOnBackButton();
    const currentUrl = this.router.url;
    console.log("currentUrl====>",currentUrl);
  }
  // exitAppOnBackButton() {
  //   this.platform.backButton.subscribeWithPriority(-1, () => {
  //     App.exitApp();
  //   });
  // }
  ionViewWillEnter()
  {
    this.ngOnInit();
  }

  exitAppOnBackButton() {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      const currentUrl = this.router.url;
      // Check if the current URL is "teacherhome"
      if (currentUrl.includes('teacherhome')) {
        App.exitApp();
      }
    });
}


  getlocalstoragedata()
  {
    return Promise.all([localStorage.getItem('f_id'),localStorage.getItem('college'),localStorage.getItem('session')]).then((values)=>{
     console.log("here i am right now =>", values);
     this.f_id=values['0'];
     this.college=values['1'];
     this.session=values['2'];
      
   });
   
  } 

  logout(page)
  {
   // this.navCtrl.setRoot(page);
    localStorage.clear();
    //Preferences.remove({ key: 'sid' });
    
    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
