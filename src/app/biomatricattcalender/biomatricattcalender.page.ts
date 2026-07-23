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
  selector: 'app-biomatricattcalender',
  templateUrl: './biomatricattcalender.page.html',
  styleUrls: ['./biomatricattcalender.page.scss'],
})
export class BiomatricattcalenderPage implements OnInit {
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
  classname:any;
  AllSessionFeesReceivedAmount:any;
  AllSessionFeesReceivedAmountOn:any;
  To_Date_For_Attendance:any;
  CheckIn:any;
  CheckOut:any;
  tid:any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    this.tid =this.route.snapshot.paramMap.get('id');    
    this.SessStart = localStorage.getItem('SessStart');
    this.SessEnd = localStorage.getItem('SessEnd');
    this.CurrentDate = localStorage.getItem('CurrentDate');
    this.sessioncaption = localStorage.getItem('caption');
    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]]

    })

console.log("this.tid--",this.tid);


    this.name = localStorage.getItem('name');
    this.studentname = localStorage.getItem('studentname');

    //this.imgpath = this.route.snapshot.paramMap.get('id2');  
    console.log('herrrr 11--xxx>', localStorage.getItem('first_name'));
    //console.log('herrrr 22-->',this.route.snapshot.paramMap.get('id2'));  
    //const ret = await Preferences.get({ key: 'sid' });

    console.log("==--==-->",)
    //console.log('first_nname 11-->',Preferences.get({ key: 'first_name' }))

    this.genreport();

    console.log('first 11====>', this.todate_post);
  }
  studentprofile()
  {
    this.router.navigate(["/teachstudentprofile",'884']);
  }
  classwiseDue(id)
  {
    console.log("id=====>",id);
    this.router.navigate(["/teachclassfees",id]);
  }

  classwiseReceived(id)
  {
    this.router.navigate(["/teachclassfeesrecon",id]);
  }

  classwiseReceivedUntill(id)
  {
    console.log("Date Provided ==>",id);
    this.router.navigate(["/teachclassfeesrecuntill",id]);
  }

  genreport() {
   
   //this.ionLoaderService.autoLoader();




      this.feeservice.staff_biomatric_attendance(this.dateParts_to,this.tid).subscribe((res) => {
        console.log("here is res ==>",res);
      this.CheckIn = res['CheckIn'];
      this.CheckOut = res['CheckOut'];
      console.log('Attendance details==>', res);
  
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
console.log("this.display_till_date==>111",this.display_till_date);
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
this.genreport();

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
    this.dateParts_to = this.dateParts_to[0] + '-' + this.dateParts_to[1] + '-' + this.dateParts_to[2];
    if (this.dateParts_to == 'undefined-undefined-') {
      console.log('date==-->', date);
      this.dateParts_to = ' ';
    }
    else {
      this.dateParts_to = this.dateParts_to;
    }
    this.genreport();
    console.log("this.dateParts_to====>",this.dateParts_to);

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
   // const ret = Preferences.get({ key: 'first_name' });
   // console.log("11first_nname 11-->", ret);
    this.user_hostel = localStorage.getItem('use_hostel');
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

  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
    //Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
