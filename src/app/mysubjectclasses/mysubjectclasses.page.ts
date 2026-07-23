import { Component, OnInit, Optional } from '@angular/core';
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
import { AttendanceService } from 'src/app/services/attendance.service';
@Component({
  selector: 'app-mysubjectclasses',
  templateUrl: './mysubjectclasses.page.html',
  styleUrls: ['./mysubjectclasses.page.scss'],
})
export class MysubjectclassesPage implements OnInit {
  session: any;
  f_id: any;
  college: any;
  ionicForm: FormGroup;
  Class_Data:any=[];
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
  Final_Due_Amount_Array:any=[];
  ToDate:any;
  currentDate:any;
  transid:any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService,private ExamClassesService: AttendanceService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
      // this.transid = localStorage.getItem('SessStart');  
      // this.router.navigate(["teachMarksExam",this.transid]);


    this.menuCtrl.enable(false);
    this.ToDate =this.route.snapshot.paramMap.get('id');    
    this.SessStart = localStorage.getItem('SessStart');
    this.SessEnd = localStorage.getItem('SessEnd');
    this.CurrentDate = localStorage.getItem('CurrentDate');
    this.sessioncaption = localStorage.getItem('caption');
    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]]

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
    
    this.SessStart=localStorage.getItem('SessStart');

    
    let date = (new Date()).toISOString();
    this.currentDate = date.toString().substring(0, 10);

    console.log('currentDate====>',this.currentDate);
    //console.log('localStorage class =>',localStorage.getItem('ClassSection')['0']);
    //const storedJsonArray = JSON.parse(localStorage.getItem('ClassSection'));
    //console.log('ClassSection==>',localStorage.getItem('ClassSection'));

    //const storedJsonArray = localStorage.getItem('ClassSection');
    //const storedJsonArray = localStorage.getItem('AttendanceClassSection');
   // console.log("storedJsonArray==>",storedJsonArray);
    //  console.log('ClassSection =>',JSON.parse(storedJsonArray));
     // this.Class_Data=JSON.parse(storedJsonArray);
    //console.log('this.Class_Data==>',this.Class_Data);



    //this.ExamClassesService.CheckExamClasses().subscribe((res) =>{
    this.ExamClassesService.CheckExamClasses_Subject().subscribe((res) =>{
      console.log('Exam Classess Here ==>',res);
     
      //this.Class_Data=res['0'].classname;
      this.Class_Data=res;
     // this.AttendanceClassMessage=res['0'].AttendanceClassMessage;
     
      console.log('this.Class_Data==>11 22',this.Class_Data);
     // console.log('this.AttendanceClassMessage==>11',this.AttendanceClassMessage);
   
   })


  }

  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }


  ClassWiseAttendance(id,id1)
  {  
       this.router.navigate(["mymarksexam",id,id1]);
  }




}

