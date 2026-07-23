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
import { ModalController } from '@ionic/angular';
import { DatePickerModalComponent } from './date-picker-modal.component';

@Component({
  selector: 'app-biomatricstafflist',
  templateUrl: './biomatricstafflist.page.html',
  styleUrls: ['./biomatricstafflist.page.scss'],
})
export class BiomatricstafflistPage implements OnInit {
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
  classname: any;
  Final_Due_Amount_Array: any = [];
  studentlist: any = [];
  employeelist: any = [];
  TransId:any;
  studentlistLength:any;
  StaffType:any;
  AttendanceData:any=[];
  AttendanceDate:any;
  today:any;
  noRecordFound:any;
  StaffName:any;
  SelectedDate:any;
  DisplayAttendanceDate:any;
  is_event:any;
  event_name:any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService,private modalCtrl: ModalController, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    
    
    this.StaffType = this.route.snapshot.paramMap.get('id');
    console.log('this.TransId--xxx>', this.TransId);
    console.log("this.StaffType ---->",this.StaffType);
    if(this.StaffType == 'T')
    {
      this.StaffName='Teaching Staff';
    }
    else if(this.StaffType == 'O')
    {
      this.StaffName='Officer Staff';
    }
    else if(this.StaffType == 'L')
    {
      this.StaffName='Admin Staff';
    }

    
    this.SessStart = localStorage.getItem('SessStart');
    this.SessEnd = localStorage.getItem('SessEnd');
    this.CurrentDate = localStorage.getItem('CurrentDate');
    this.sessioncaption = localStorage.getItem('caption');
    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]]

    })
    console.log('this.classname--xxx>', this.classname);



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


//modal screen ke middle mein show karna hai
//stop future date show alret and return dalse if future date is selected
// async openCalendar() {
//   const modal = await this.modalCtrl.create({
//     component: DatePickerModalComponent,
//     cssClass: 'calendar-modal', // custom class
//     breakpoints: [0, 0.5],        // 0.5 = 50% screen height
//     initialBreakpoint: 0.5,       // Start at 50% height
//     backdropDismiss: true
//   });
//   modal.onDidDismiss().then(result => {
//     if (result.data) {
//       console.log("result.data -->", result.data);
//       const dateObj = new Date(result.data);
//       const formattedDate = dateObj.toLocaleDateString('en-GB'); // dd/mm/yyyy
//       console.log("formattedDate-->",formattedDate);
//       this.AttendanceDate=formattedDate;

//       this.feeservice.staff_biomatric_attendance(result.data,'').subscribe((res) => {
//         console.log("here is res ==>",res);
//         this.AttendanceData=res;
//         console.log('this.AttendanceData -->',this.AttendanceData);
//       // this.CheckIn = res['CheckIn'];
//       // this.CheckOut = res['CheckOut'];
//       console.log('Attendance details==>', res);
  
//     });


//     }
//   });
//   return await modal.present();
// }


async openCalendar() {
  const modal = await this.modalCtrl.create({
    component: DatePickerModalComponent,
    cssClass: 'calendar-modal',
      breakpoints: [0, 0.7, 1],
        initialBreakpoint: 0.7,
    backdropDismiss: true
  });
//
  modal.onDidDismiss().then(result => {
    if (result.data) {
      console.log("result.data -->", result.data);
      const dateObj = new Date(result.data);
      

      // ✅ Normalize both dates (ignore time)
      const selectedDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      this.SelectedDate=selectedDate;

      if (selectedDate.getTime() > today.getTime()) {
        alert("Future date is not allowed..!");
        return false;
      }

      const formattedDate = selectedDate.toLocaleDateString('en-GB'); // dd/mm/yyyy
      console.log("formattedDate-->", formattedDate);
      this.AttendanceDate = result.data;
      this.DisplayAttendanceDate=formattedDate;

console.log("this.AttendanceDate ==>", this.AttendanceDate);

      this.feeservice.staff_biomatric_attendance(result.data, '').subscribe((res) => {
        console.log("here is res ==>", res);
        this.AttendanceData = res;
        console.log('this.AttendanceData -->', this.AttendanceData);


      //           Object.keys(this.AttendanceData).forEach(key => {
      //   const item = this.AttendanceData[key];

      //   // jo event aaya wahi value is_event me daal do
      //   item.is_event = item.event ? item.event : '';
      // });
        Object.keys(this.AttendanceData).forEach(key => {
    const item = this.AttendanceData[key];

          if (item.event) {
            //item.is_event = 'Y';
            this.is_event='Y';
            this.event_name=item.event;
          } else {
            //item.is_event = 'N';
            this.is_event='N';
          }
        });
      console.log("this.event_name-->", this.event_name);
      console.log("this.is_event", this.is_event);
      console.log("Updated AttendanceData =>", this.AttendanceData);
      });



          this.feeservice.biomatric_staff_list(this.StaffType,result.data).subscribe((res) => {
    
      console.log('employee List details==>', res);
      this.studentlist = res;
      this.employeelist = res;
      
      this.studentlistLength=res.length;
      
      console.log('this.studentlistLength-cc->', this.studentlistLength);
      console.log('this.employeelist-cc->', this.employeelist);

      this.ionLoaderService.dismissLoader();
    });

    
    }
  });

  return await modal.present();
}



  ngOnInit() {
    this.ionLoaderService.autoLoader();
    //this.feeservice.stulist(this.TransId).subscribe((res) => {
    this.feeservice.biomatric_staff_list(this.StaffType,this.AttendanceDate).subscribe((res) => {
    
      console.log('employee List details==>', res);
      this.studentlist = res;
      this.employeelist = res;
      
      this.studentlistLength=res.length;


      
      
      console.log('this.studentlistLength-cc->', this.studentlistLength);

      this.ionLoaderService.dismissLoader();
    });


    this.today = new Date();

       this.feeservice.staff_biomatric_attendance('','').subscribe((res) => {
        console.log("here is res ==>",res);
        this.AttendanceData=res;
        console.log('this.AttendanceData -->',this.AttendanceData);
      // this.CheckIn = res['CheckIn'];
      // this.CheckOut = res['CheckOut'];
      console.log('Attendance details==>', res);
  

        Object.keys(this.AttendanceData).forEach(key => {
    const item = this.AttendanceData[key];

          if (item.event) {
            //item.is_event = 'Y';
            this.is_event='Y';
            this.event_name=item.event;
          } else {
            //item.is_event = 'N';
            this.is_event='N';
          }
        });


    });

    this.ionLoaderService.dismissLoader();

    console.log('this.first_name-cc->', localStorage.getItem('first_name'));
    console.log('this.imgpath-->', this.imgpath);
    console.log('this.user_hostel-->', this.user_hostel);


  }


  filterStudents(event: any) {
  const searchTerm = event.target.value?.toLowerCase() || '';
  if (!searchTerm.trim()) {
    this.employeelist = [...this.studentlist]; // Reset list if empty
  } else {
    this.employeelist = this.studentlist.filter(stu =>
      stu.staff_name?.toLowerCase().includes(searchTerm)
    );
  }

   this.noRecordFound = this.employeelist.length === 0;
}

  chatbox(id1,id2)
  {
    console.log("this.id111====>",id1);
    console.log("id11====>",id2);
    this.router.navigate(["/biomatricattcalender",'',id1,id2]);
  }

  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }
  stufeedetail(id) {
    console.log("Stu id====>", id);
    this.router.navigate(["/biomatricattcalender", id,'']);

  }
  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
   // Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}

