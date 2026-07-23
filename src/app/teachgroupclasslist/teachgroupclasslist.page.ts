import { Component, OnInit, Optional } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { AttendanceService } from 'src/app/services/attendance.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GroupchatService } from 'src/app/services/groupchat.service';
@Component({
  selector: 'app-teachgroupclasslist',
  templateUrl: './teachgroupclasslist.page.html',
  styleUrls: ['./teachgroupclasslist.page.scss'],
})
export class TeachgroupclasslistPage implements OnInit {
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
  AttendanceClassMessage: any;
  ClassArray:any=[];
  group_id:any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private attendanceservice: AttendanceService,private groupchat: GroupchatService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    this.group_id =this.route.snapshot.paramMap.get('id');    
    this.ToDate = this.route.snapshot.paramMap.get('id');
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

    this.groupchat.group_student_class_list(this.group_id).subscribe((res) => {
      console.log('Class Listssss ==>', res);
      this.ClassArray=res;
      console.log('this.ClassArray ==>', this.ClassArray);
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




  StudentList(id,id1) {
    //this.router.navigate(["teachstulist",id]);
    this.router.navigate(["teachchatstulist",id,id1]);
  }

  secwiseDue(id, id1) {
    console.log("id====>xxxx", id);
    console.log("id1====>xxxx", id1);
    this.router.navigate(["/teachsecfees", id, id1]);

  }
  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
    //Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
