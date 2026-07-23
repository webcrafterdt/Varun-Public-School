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
import { MarkattendanceService } from 'src/app/services/markattendance.service';
import { AssignhomeworkService } from 'src/app/services/assignhomework.service';
@Component({
  selector: 'app-homeworksubjects',
  templateUrl: './homeworksubjects.page.html',
  styleUrls: ['./homeworksubjects.page.scss'],
})
export class HomeworksubjectsPage implements OnInit {
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
  responseJson:any =[];
  ExamArray:any=[];
  ClassName:any=[];
  SubjectArray:any=[];
  examsubdivid:any;
  category: any;
  status:any;
  message:any;
  HomeworkSubjects:any=[];
  TeacherSubjectList:any=[];
  Transids:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService, private assignhomeworkservice: AssignhomeworkService, private attstudentlist: MarkattendanceService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);

    this.Transids = JSON.parse(this.route.snapshot.paramMap.get('id'));    
    
    
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
    console.log("this.Transids==>",this.Transids);
    this.category = 'applicationlist';
    //this.ionLoaderService.simpleLoader();
    //this.assignhomeworkservice.HomeworkClasses().subscribe((res) => {
      this.assignhomeworkservice.HomeworkSubjects().subscribe((res) => {
      console.log('homeworksubjects here -->', res);
      this.status =res['status'];
          this.message = res['HomeWorkSubjectMessage'];
      this.TeacherSubjectList=res['TeacherSubjectList'];
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

  // ClassWiseAttendance(id)
  // {
  //     this.router.navigate(["teachAttCalender",id]);
  // }

  ProceedToHomeWork(subid)
  {
    console.log("Subject Idsss ==>",subid);
    console.log('this.Transidsaaa--->',JSON.stringify(this.Transids));
    let id  = JSON.stringify(this.Transids);
    let id2 = subid;
    this.router.navigate(['formhomework',id,id2])
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
