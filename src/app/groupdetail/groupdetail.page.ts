import { Component, OnInit, Optional } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GroupchatService } from 'src/app/services/groupchat.service';
@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.page.html',
  styleUrls: ['./groupdetail.page.scss'],
})
export class GroupdetailPage implements OnInit {
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
  stuid:any;
  studentdetail:any=[];
  GroupDetail:any=[];
  groupid:any;
  TotalStudentInGroups:any;
  TeacherInGroup:any=[];
  StuInGroup:any=[];
  GroupDet:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private groupchat: GroupchatService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    this.groupid =this.route.snapshot.paramMap.get('id');    
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

 

  ionViewDidEnter() {
    console.log('herrrr 11--xxx>', localStorage.getItem('first_name'));
    this.fname = localStorage.getItem('name');
    //  this.image='//192.168.2.4/development/college/neotia/app/webroot/'+localStorage.getItem('image');
    this.image = localStorage.getItem('image');
    this.localimage = localStorage.getItem('image_name');
    console.log('this.localimage==>', this.localimage);
    // this.ionLoaderService.dismissLoader();
    //const ret = Preferences.get({ key: 'first_name' });
    //console.log("11first_nname 11-->", ret);
    this.user_hostel = localStorage.getItem('use_hostel');
  }



  ngOnInit() {

    this.groupchat.group_detail(this.groupid).subscribe((res) => {
      console.log("res====>",res);
      this.GroupDetail=res;
      this.TotalStudentInGroups=res[0]['TotalStudents'];
      this.TeacherInGroup=res[2]['teacher'];
      this.StuInGroup=res[1]['students'];
      this.GroupDet=res[3]['GroupMasterDetail'];
      console.log('this.TeacherInGroup ==>',this.TeacherInGroup);
      console.log('this.TotalStudentInGroups ==>',this.TotalStudentInGroups);
      console.log('this.GroupDetail==>', this.GroupDetail);
      console.log('this.GroupDet==>', this.GroupDet);
      this.ionLoaderService.dismissLoader();
    });
    this.ionLoaderService.dismissLoader();



  }
  groupstudentlist(id)
  {
    console.log('group_id ==>',id);
   // this.router.navigate(["/teachchatstulist",id]);
   this.router.navigate(["/teachgroupclasslist",id]);
  }
  chatbox(id,id2)
  {
    this.router.navigate(["/teachchatbox",id,'',id2]);
  }

  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }

  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
   // Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}

