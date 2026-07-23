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
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

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
  legendarray:any=[];
  TotalPresent:any;
  TotalAbsent:any;
  //highlightedDates:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder,private attstudentlist: MarkattendanceService, private attendanceService: AttendanceService ,private eventservice: EventService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    this.transid =this.route.snapshot.paramMap.get('id');    

   this.Legendlist();
    
  }


  onViewTitleChanged(title: string) {
    console.log('View title changed:', title);
  }

  Legendlist() {
    this.attstudentlist.Legendlist().subscribe((res) => {
      console.log("legends ==>",res);
      this.legendarray=res;

      let presentlegend = {
        "0": "4",
        "1": "Present",
        "2": "P",
        "3": "Y",
        "4": "P",
        "5": "#9bfd9b",
        "6": "",
        "7": "N",
        "8": "02.gif",
        "9": null,
        "id": "0",
        "legendname": "Present",
        "shname": "P",
        "isabsent": "N", 
        "treatAs": "P",
        "color": "#9bfd9b",
        "description": "",
        "removed": "N",
        "legendimage": "02.gif",
        "is_leave": null,
        "showDefault": false
      };
      
      
          // let attendanceLegend = [];
          // attendanceLegend.push(presentlegend);
      
      
            this.legendarray.push(presentlegend);
      console.log("this.legendarray ==>",this.legendarray);
      })
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 ;
  };

  
 
  ngOnInit() {
    console.log('this.first_name-cc->', localStorage.getItem('first_name'));
    
    
    console.log('this.SessionStartdate-cc->', this.SessionStartdate);
    console.log('this.CurrentDate-cc->', this.CurrentDate);
    
    this.SessionStartdate=localStorage.getItem('sessionstartdate');
    console.log("this.SessionStartdate==>",this.SessionStartdate);
    this.CurrentDate= new Date().toISOString();
    
    // this.eventservice.event_list_for_mark_attendance().subscribe((res) =>{
    //   this.event_list = res;
    //   //this.MarkedAttendance=res;
    //   console.log('this.event_list ==>',this.event_list);
    //   this.ionLoaderService.dismissLoader();
    // })

    
     this.attendanceService.CheckStudentAttendance().subscribe((res) =>{
      // console.log('student list data ==>',res);
      // console.log('this.transid ====>',this.transid);
      this.MarkedAttendance=res['Attendance'];
      this.TotalPresent=res['TotalPresent'];
      this.TotalAbsent=res['TotalAbsent'];
      // this.studentList=res['0']['AttendanceData'];
      // this.attendanceLegend=res['0']['AttendanceLegendArr'];
    console.log('this.MarkedAttendance ==>',this.MarkedAttendance);
    console.log('this.TotalPresent ==>',this.TotalPresent);
    console.log('this.TotalAbsent ==>',this.TotalAbsent);
    
    })

    
}

ionViewWillEnter()
{
  this.ngOnInit();
}

   getdate(selecteddate)
    {
      console.log('selecteddate==>',selecteddate);
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


      this.eventservice.event_list_for_mark_attendance(this.CalenderDate).subscribe((res) =>{
        
        this.event_list = res[0];
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

}


