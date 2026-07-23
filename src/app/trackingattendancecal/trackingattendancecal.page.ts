import { Component, OnInit, Optional,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
//import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CalendarComponent } from 'ionic2-calendar';
import { MarkattendanceService } from 'src/app/services/markattendance.service';
@Component({
  selector: 'app-trackingattendancecal',
  templateUrl: './trackingattendancecal.page.html',
  styleUrls: ['./trackingattendancecal.page.scss'],
})
export class TrackingattendancecalPage implements OnInit {

  highlightedDates1 = [
    {
      date: '2024-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2024-01-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      date: '2024-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
    },
  ];
 
  details: any = [];
  fromdate: any;
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
  status:any;
  transid:any;
  message:any;
  event_list:any;
  studentList:any = [];
  attendanceLegend:any =[];
  MarkedAttendance:any=[];
  CalenderDate:any;
  dateParts_to:any;
  IsAttendanceMarked:any;
  SessionStartdate:any;
  totalstudent:any;
  totalPresentstudent:any;
  AttendancemarkedBy:any;
  SelectedDate:any;
  ClassName:any;
  //highlightedDates:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder,private attstudentlist: MarkattendanceService, private eventservice: EventService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    this.transid =this.route.snapshot.paramMap.get('id'); 
    
    this.SelectedDate =this.route.snapshot.paramMap.get('id1'); 

    this.ClassName = this.route.snapshot.paramMap.get('id1'); 

   
    
  }


  onViewTitleChanged(title: string) {
    console.log('View title changed:', title);
  }



  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 ;
  };

  ngOnInit() {
    console.log('this.first_name-cc->', localStorage.getItem('first_name'));

    this.SessionStartdate=localStorage.getItem('SessStart');
    
    this.CurrentDate= new Date().toISOString();
    
    // this.eventservice.event_list_for_mark_attendance().subscribe((res) =>{
    //   this.event_list = res;
    //   //this.MarkedAttendance=res;
    //   console.log('this.event_list ==>',this.event_list);
    //   this.ionLoaderService.dismissLoader();
    // })

    this.ionLoaderService.autoLoader();

     this.attstudentlist.checkattendanceforday('2024-02-22',this.transid,localStorage.getItem('SessStart'),localStorage.getItem('SessEnd')).subscribe((res) =>{
      // console.log('student list data ==>',res);
      // console.log('this.transid ====>',this.transid);
      this.MarkedAttendance=res;
      // this.studentList=res['0']['AttendanceData'];
      // this.attendanceLegend=res['0']['AttendanceLegendArr'];
   //   this.ionLoaderService.dismissLoader();
    console.log('this.MarkedAttendance ==>',this.MarkedAttendance);
    
    })
}

ionViewWillEnter()
{
  this.ngOnInit();
console.log("this.SelectedDate---->",this.SelectedDate);
  this.eventservice.CheckTotalAttendance(this.SelectedDate,this.transid).subscribe((res) =>{
        
    console.log('attendance count res==>',res);
    this.totalstudent=res['TotalStudents'];
    this.totalPresentstudent=res['TotalPresentStudents'];
    this.AttendancemarkedBy=res['AttendancemarkedBy'];
    

    console.log("this.totalstudent==>",this.totalstudent);
    console.log("this.totalPresentstudent==>",this.totalPresentstudent);
    console.log("this.AttendancemarkedBy==>",this.AttendancemarkedBy);
    this.ionLoaderService.dismissLoader();
  })
}

   getdate(selecteddate)
    {
      this.event_list='';
      this.dateParts_to = selecteddate.substring(0, 10).split("-");
      this.dateParts_to = this.dateParts_to[0] + '-' + this.dateParts_to[1] + '-' + this.dateParts_to[2];
      if (this.dateParts_to == 'undefined-undefined-') {
        console.log('date==-->', selecteddate);
        this.CalenderDate = ' ';
      }
      else {
        this.CalenderDate = this.dateParts_to;
      }
      console.log("selecteddate==>",this.CalenderDate);


      this.eventservice.CheckTotalAttendance(this.CalenderDate,this.transid).subscribe((res) =>{
        
        console.log('attendance count res==>',res);
        this.totalstudent=res['TotalStudents'];
        this.totalPresentstudent=res['TotalPresentStudents'];
        this.AttendancemarkedBy=res['AttendancemarkedBy'];
        
        
        this.ionLoaderService.dismissLoader();
      })





      this.eventservice.event_list_for_mark_attendance(this.CalenderDate).subscribe((res) =>{
        
        //this.event_list = res[0];
        this.event_list = res;
        console.log('this.event_list res==>',this.event_list);
        
        this.ionLoaderService.dismissLoader();
      })


      this.eventservice.markedAttendance(this.CalenderDate,this.transid).subscribe((res) =>{
        
        this.IsAttendanceMarked = res;
        console.log('this.IsAttendanceMarked res==>',this.IsAttendanceMarked);
        
        this.ionLoaderService.dismissLoader();
      })
    }

    MarkAttendance(id,id1)
    {
      this.router.navigate(['/teacherattendanc',id,id1])
      
    }
    
    homepageredirect()
    {
    
      this.router.navigate(['/teachAttClassList']);
    }

    
}


