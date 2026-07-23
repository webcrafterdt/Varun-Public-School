import { Component, OnInit,Optional,ChangeDetectorRef } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import OneSignal from 'onesignal-cordova-plugin';
// import { NotificationReceivedEvent } from 'onesignal-cordova-plugin/types/Notification';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
  classname:any;
  public appPages = [
    { title: 'Profile', url: '/profile', img: 'assets/male-student.png' },
    { title: 'Attendance', url: '/attendance', img: 'assets/examination.png' },
    { title: 'HomeWork', url: '/homework', img: 'assets/homework.png' },
    { title: 'Fees', url: '/fees', img: 'assets/transaction.png' },
    { title: 'Circular', url: '/circular', img: 'assets/circular_new_1.png' },
    { title: 'Events', url: '/eventcal', img: 'assets/eve_calendar.png' },
    { title: 'Groups', url: '/stugroups', img: 'assets/group-chat.png' },
    { title: 'Marks', url: '/exammarks', img: 'assets/examination.png' },
    
    { title: 'Contact Us', url: '/connectus', img: 'assets/coneect_us.png' },
    { title: 'Connect Us', url: '/wesitelink', img: 'assets/browser.png' },
    
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
   ];


  details:any=[];
  newbedges:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public menuCtrl: MenuController, private cdr: ChangeDetectorRef,private storage: StorageService,private route: ActivatedRoute,private router: Router,private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    //this.newbedges=1;
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
  }

  notificationlist()
  {
    this.newbedges='';
    this.router.navigate(["/notifications"]);
  }
  
    ionViewDidEnter()
    {
      console.log('herrrr 11--xxx>',localStorage.getItem('first_name'));
      this.fname=localStorage.getItem('studentname');
    //  this.image='//192.168.2.4/development/college/neotia/app/webroot/'+localStorage.getItem('image');
    this.image=localStorage.getItem('photo');
    this.classname=localStorage.getItem('classname');
      this.localimage=localStorage.getItem('image_name');
      console.log('this.localimage==>',this.localimage);
     // this.ionLoaderService.dismissLoader();
     // const ret = Preferences.get({ key: 'first_name' });
     // console.log("11first_nname 11-->",ret);
      this.user_hostel=localStorage.getItem('use_hostel');
      console.log('this.image 111111=>==>',this.image);
    }
  ngOnInit() {

   this.platform.ready().then(() => {


    OneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
     // this.router.navigate(["/notifications"]);
    });



    const userId = localStorage.getItem('studentid');//'123456';
    if(userId){
      OneSignal.setExternalUserId(userId);
    }
      else{
        console.log("Student ID not found");
    }

    console.log('OneSignal.setExternalUserId -->',OneSignal.setExternalUserId);
  

  //   OneSignal.setNotificationWillShowInForegroundHandler((event: any) => {
  //     // This function will be called when a notification is received and about to be displayed in the foreground
  //     this.incrementBadgeCount();
  //     this.cdr.detectChanges();
  //     console.log('Notification received:', event);
      
  // });

  });


    console.log('this.first_name-cc->',localStorage.getItem('first_name'));
    console.log('this.imgpath-->',this.imgpath);
    console.log('this.user_hostel-->',this.user_hostel);


  }

//how to detect changes in  variable this.newbedges and display in view
  incrementBadgeCount() {
    try {
        // Initialize currentBadgeCount to 0 if this.newbedges is not defined
        const currentBadgeCount = this.newbedges || 0;

        // Increment the badge count by 1
        const newBadgeCount = currentBadgeCount + 1;

        // Update this.newbedges with the new badge count
        this.newbedges = newBadgeCount;

        // Log the updated badge count to the console
        console.log('Updated badge count:-->', this.newbedges);
    } catch (error) {
        // Handle any errors that occur during the badge count increment
        console.error('Error incrementing badge count:', error);
    }
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
