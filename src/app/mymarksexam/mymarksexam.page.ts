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
@Component({
  selector: 'app-mymarksexam',
  templateUrl: './mymarksexam.page.html',
  styleUrls: ['./mymarksexam.page.scss'],
})
export class MymarksexamPage implements OnInit {
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
  ExamCounts:any;
  SelectedClassName:any;
  examsubdivid:any;
  ExamArrayObject:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService, private attstudentlist: MarkattendanceService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);

    this.transid =this.route.snapshot.paramMap.get('id');    
    //this.SelectedClassName=this.route.snapshot.paramMap.get('id1');
    
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

    ionViewDidEnter() {
      //  this.SelectedClassName=this.route.snapshot.paramMap.get('id1');
    }
    
  ngOnInit() {
      this.SelectedClassName=this.route.snapshot.paramMap.get('id1');
      console.log('SelectedClassName -->',this.SelectedClassName);
      
    this.SessStart=localStorage.getItem('SessStart');
    let date = (new Date()).toISOString();
    this.currentDate = date.toString().substring(0, 10);
    console.log('currentDate====>',this.currentDate);
    const storedJsonArray = localStorage.getItem('ClassSection');
    this.Class_Data=JSON.parse(storedJsonArray);
    console.log('this.Class_Data==>',this.Class_Data);


    //this.attstudentlist.getstudentlist(this.transid,'','','').subscribe((res) => {
      this.attstudentlist.getmymarksexam(this.transid, this.examsubdivid, '','').subscribe((res) => {
      this.responseJson = res;
      console.log('this.responseJson res==> 111', res);

        if(localStorage.getItem('IsClassTeacher') == 'Y')
      {
        this.ExamArrayObject=Object.keys(this.responseJson.ExamArray.Exams);
        this.ExamArray = this.responseJson.ExamArray.Exams;//commented 
        if(this.responseJson.SubjectArray)
        {
          this.SubjectArray = this.responseJson.SubjectArray.Subjects; //commented
        }
        
       // this.ClassName=this.responseJson.classname;
      }
      else
      {
        this.ExamArrayObject=Object.keys(this.responseJson.ExamArray.Exams);
        this.ClassName=this.responseJson.classname;
        this.ExamArray = this.responseJson.ExamArray.Exams;//commented 
      }
      
      console.log("this.ExamArrayObject responsssssss=>",this.ExamArrayObject);
      console.log("this.ExamArray responsssssss=>",this.ExamArray[this.ExamArrayObject[1]]);
      console.log("responsssssss=>",this.responseJson.ExamArray.length);

      console.log("this.ExamArray.lengthresponsssssss=>",this.ExamArrayObject.length);
      //   if(this.ExamArray.length > 0)
        if(this.ExamArrayObject.length > 0)
        //if(this.responseJson.ExamArray.length > 0)
      {
        this.ExamCounts='Y';
      }
      else{
        this.ExamCounts='N';
      }

      console.log('this.ExamCounts res==>', this.ExamCounts);
      console.log('this.ExamArray res==>', this.ExamArray);
      console.log('this.SubjectArray res==>', this.SubjectArray);

      //  this.StudentArray = this.responseJson.StudentArray.Students
    });



  }

  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }




  getexamsubjects(id,id1,id2,id3,id4)
  {
    console.log("id====>xxxx",id);
    console.log("id1====>xxxx",id1);
    this.router.navigate(["/mymarkssubject",id,id1,id2,id3,id4]);
    
  }
  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
   // Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
