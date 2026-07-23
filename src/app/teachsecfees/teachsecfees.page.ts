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
@Component({
  selector: 'app-teachsecfees',
  templateUrl: './teachsecfees.page.html',
  styleUrls: ['./teachsecfees.page.scss'],
})
export class TeachsecfeesPage implements OnInit {
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
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    this.classname =this.route.snapshot.paramMap.get('id');    
    this.toDate=this.route.snapshot.paramMap.get('id1');
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

    //this.genreport();

    console.log('first 11====>', this.todate_post);
  }



  genreport() {

    this.ionLoaderService.simpleLoader();
    if (this.dateParts) {
      console.log('this.dateParts Available ==>', this.dateParts);
      this.fromdate_post = this.dateParts.substring(0, 10).split("-");
      this.fromdate_post = this.fromdate_post[2] + '-' + this.fromdate_post[1] + '-' + this.fromdate_post[0];
      console.log('this.fromdate_post 11====>', this.fromdate_post);



      this.todate_post = this.dateParts_to.substring(0, 10).split("-");
      this.todate_post = this.todate_post[2] + '-' + this.todate_post[1] + '-' + this.todate_post[0];
      console.log('this.todate_post 11====>', this.todate_post);


      console.log('this.todate_post[1] 11====>', this.dateParts_to.substring(0, 10).split("-"));

      this.display_till_date = this.dateParts_to;






    }
    else {
      console.log('this.dateParts Not ==>', this.dateParts);

      this.fromdate_post = '';
      this.todate_post = '';

      this.display_till_date = this.CurrentDate.split("-");

      this.display_till_date = this.display_till_date[2] + '-' + this.display_till_date[1] + '-' + this.display_till_date[0];
      console.log('this.display_till_date==>1', this.display_till_date);
      //this.display_till_date=this.changeDateFormat_to(this.SessEnd);
    }



    this.feeservice.fees_detail(this.fromdate_post, this.toDate,this.classname).subscribe((res) => {
      

      console.log('res fees details==>', res);
      this.TotalDue_Amount = res['TotalDue_Amount'];
      this.TotalPaidRangeWise = res['TotalPaidRangeWise'];
      this.TotalPaid_Amount_OD = res['TotalPaid_Amount_OD'];
      this.Final_Due_Amount_Array=res['SW_Final_Due_Amount_Array'];
      this.Final_Due_Amount_ArrayObject=Object.keys(res['SW_Final_Due_Amount_Array']);

console.log("this.Final_Due_Amount_Array==>",this.Final_Due_Amount_Array);
console.log("this.Final_Due_Amount_ArrayObject==>",this.Final_Due_Amount_ArrayObject);
      this.ionLoaderService.dismissLoader();

      this.display = 'Y';
    });
   // this.ionLoaderService.dismissLoader();





    this.feeservice.attendance_detail().subscribe((res) => {
      this.totalstudents = res['TotalStudent'];
      this.presentstudents = res['TotalPresent'];
      console.log('Attendance details==>', res);
    //  this.ionLoaderService.dismissLoader();
    });
  //  this.ionLoaderService.dismissLoader();






  }
  ionViewDidLeave()
  {
    this.ionLoaderService.dismissLoader();
  }


  changeDateFormat_display(date: string) {

    console.log('date====>', date);
    this.display_till_date = date.substring(0, 10).split("-");
    this.display_till_date = this.display_till_date[2] + '-' + this.display_till_date[1] + '-' + this.display_till_date[0];
    if (this.dateParts == 'undefined-undefined-') {
      console.log('date==-->', date);
      this.display_till_date = ' ';
    }
    else {
      this.display_till_date = this.display_till_date;
    }

  }


  changeDateFormat_from(date: string) {

    console.log('dateParts====>', this.dateParts);
    this.dateParts = date.substring(0, 10).split("-");
    this.dateParts = this.dateParts[2] + '-' + this.dateParts[1] + '-' + this.dateParts[0];
    if (this.dateParts == 'undefined-undefined-') {
      console.log('date==-->', date);
      this.dateParts = ' ';
    }
    else {
      this.dateParts = this.dateParts;
    }


    //  var ddMMYYYYDate = new Date(+this.dateParts[2]  +this.dateParts[0]);
    // var ddMMYYYYDate = dateParts[2]+'-'+dateParts[1]+'-'+dateParts[0] ;
    // return ddMMYYYYDate;
  }

  from_date(fromdate) {
    console.log('fromdate====>', fromdate);
    this.fromdate = this.changeDateFormat_from(fromdate);
    console.log('this.fromdate====>', this.fromdate);
  }



  changeDateFormat_to(date: string) {

    console.log('dateParts====>', this.dateParts_to);
    this.dateParts_to = date.substring(0, 10).split("-");
    this.dateParts_to = this.dateParts_to[2] + '-' + this.dateParts_to[1] + '-' + this.dateParts_to[0];
    if (this.dateParts_to == 'undefined-undefined-') {
      console.log('date==-->', date);
      this.dateParts_to = ' ';
    }
    else {
      this.dateParts_to = this.dateParts_to;
    }

  }



  to_date(todate) {
    console.log('todate====>', todate);
    this.toDate = this.changeDateFormat_to(todate);
    console.log('this.todate====>', this.toDate);
  }



  goClicked() {
    console.log('From:', this.fromDate);
    console.log('To:', this.toDate);
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
    this.genreport();
  }
  ngOnInit() {
    console.log('this.first_name-cc->', localStorage.getItem('first_name'));
    console.log('this.imgpath-->', this.imgpath);
    console.log('this.user_hostel-->', this.user_hostel);


  }

  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }

  stuwiseDue(id,id1)
  {
    console.log("id====>",id);
    this.router.navigate(["/teachstufees",id,id1]);
    
  }
  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
   // Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
