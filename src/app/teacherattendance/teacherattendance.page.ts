import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { MarkattendanceService } from 'src/app/services/markattendance.service';
import { ToastService } from 'src/app/services/toast.service';
import { ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-teacherattendance',
  templateUrl: './teacherattendance.page.html',
  styleUrls: ['./teacherattendance.page.scss'],
})
export class TeacherattendancePage implements OnInit {
  status: any;
  message: any;
  event_list: any = [];
  Class_Data: any = [];
  studentList: any = [];
  attendanceLegend: any = [];
  studentAttendanceContener: any = [];
  dateParts: any;
  fromdate: any;
  transid: any;
  dateymd: any;
  studentsStr: any;
  SessStart: any;
  currentDate: any;
  SelectedLegendID: any;
  SelectedLegendColor: any;
  selectedStudent: any;
  Date: any;
  old_stu_index:any;
  // Define an array to keep track of selected students
  selectedStudents: any[] = [];
  selectedBackgroundColor: any;
  currentLegendIndex = 0; // Initialize the current legend index
  constructor(private eventservice: EventService, private route: ActivatedRoute,private alert:AlertController, private router: Router, private ionLoaderService: IonLoaderService, private attstudentlist: MarkattendanceService, private toastservice: ToastService) { }

  ngOnInit() {
    this.studentsStr = '';
    this.SessStart = localStorage.getItem('SessStart');

    this.Date = this.route.snapshot.paramMap.get('id');
    this.transid = this.route.snapshot.paramMap.get('id1');
    this.dateymd = this.Date;
    let date = (new Date()).toISOString();
    this.currentDate = date.toString().substring(0, 10);

    console.log('currentDate====>', this.currentDate);
    //console.log('localStorage class =>',localStorage.getItem('ClassSection')['0']);
    //const storedJsonArray = JSON.parse(localStorage.getItem('ClassSection'));
    //console.log('ClassSection==>',localStorage.getItem('ClassSection'));

    const storedJsonArray = localStorage.getItem('ClassSection');
    //  console.log('ClassSection =>',JSON.parse(storedJsonArray));
    this.Class_Data = JSON.parse(storedJsonArray);
    console.log('this.Class_Data==>', this.Class_Data);

    this.getstudentlist(this.Date, this.transid);

  }



  ionViewWillEnter()
  {
    this.ngOnInit();
  }





  // toggleCardColor(student: any) {
  //   // Set the background color of the tapped card to the SelectedLegendColor
  //   student.backgroundColor = this.SelectedLegendColor;
  //   // Update the CSS variable
  //   document.documentElement.style.setProperty('--selected-background-color', this.SelectedLegendColor);
  // }

  // getSelectedLegend(legendid: any, legendcolor: string) {
  //   this.SelectedLegendColor = legendcolor; // Update the SelectedLegendColor property
  // }





  getSelectedLegend(legendid, legendcolor, LegendValue) {

    this.SelectedLegendColor = legendcolor;

    this.SelectedLegendID = legendid;
    console.log("this.SelectedLegendID==>11", this.SelectedLegendID);
    console.log("this.SelectedLegendColor==>", this.SelectedLegendColor);
    this.selectedBackgroundColor = 'lightgray';
    this.LegendValue = LegendValue;
    console.log("valuevalue==>", LegendValue);
  }


  isSelected(student: any): boolean {
    return this.selectedStudents.includes(student);
  }


  toggleCardColor(student: any, Key) {
    const index = this.selectedStudents.indexOf(student);

     console.log('student---->', student);
    if (index !== -1) {
      this.selectedStudents.splice(index, 1);
      this.studentAttendanceContener.splice(index, 1);
      console.log("Yes spliced this.LegendValue", this.LegendValue);
      student.background_color = '#9bfd9b';
      student.LegendValue = 'P';
      //document.documentElement.style.setProperty('--selected-background-color', 'blue');
      if (this.LegendValue != 'P') {


        console.log("this.selectedStudents====>xx", this.selectedStudents);
          //this.selectedStudents.push(student);
        // student.background_color = this.SelectedLegendColor;
        // student.LegendValue = this.LegendValue;
        // student.legendId = this.SelectedLegendID;

        console.log("Key====>",Key);
        // const currentLegend = this.attendanceLegend[this.currentLegendIndex];
        // student.legendId = currentLegend[0];
        // student.background_color = currentLegend[5];
        // student.LegendValue = currentLegend[2];
        // this.currentLegendIndex = (this.currentLegendIndex + 1) % this.attendanceLegend.length;
        if (this.old_stu_index !== Key) {
          // Reset `this.currentLegendIndex` to zero for a new `Key`
          this.currentLegendIndex = 0;
        }
        //this.currentLegendIndex = (this.currentLegendIndex + 1) % this.attendanceLegend.length;
        //this.currentLegendIndex = (this.currentLegendIndex + 1) % this.attendanceLegend.length;
        this.currentLegendIndex = (student.LegendIndex + 1) % this.attendanceLegend.length;
        const currentLegend = this.attendanceLegend[this.currentLegendIndex];
        student.legendId = currentLegend["0"];
        student.background_color = currentLegend["5"];
        student.LegendValue = currentLegend["2"];

        student.LegendIndex = this.currentLegendIndex;
    
        


        this.old_stu_index=Key;

        console.log('this.currentLegend==>',currentLegend);
        console.log('this.currentLegendIndex==>',this.currentLegendIndex);
        console.log('this.attendanceLegend==>',this.attendanceLegend);

        this.selectedStudents.push(student);
        console.log("[this.selectedStudents.length===>", this.selectedStudents.length);
        const lastStudentKey = this.selectedStudents.length - 1;
        console.log("Key===>", Key);
        console.log("lastStudentKey===>", Key);

        console.log("this.selectedStudents===>22", this.selectedStudents);

        let tmpArr = { 'stuid': this.selectedStudents[lastStudentKey].stuid, 'legentid': this.selectedStudents[lastStudentKey].legendId };
        this.studentAttendanceContener.push(tmpArr);
      }
    } else {
      //   document.documentElement.style.setProperty('--selected-background-color', this.SelectedLegendColor);
      console.log("this.selectedStudents====>xx", this.selectedStudents);
      //this.selectedStudents.push(student);
      // student.background_color = this.SelectedLegendColor;
      // student.LegendValue = this.LegendValue;
      // student.legendId = this.SelectedLegendID;

      console.log("this.attendanceLegend====>xx", this.attendanceLegend);
      
//mujhe ye condition set karin hai agar Key new ho to this.currentLegendIndex zerow se start hoga
    if (this.old_stu_index !== Key) {
      // Reset `this.currentLegendIndex` to zero for a new `Key`
      this.currentLegendIndex = 0;
    }

      const currentLegend = this.attendanceLegend[this.currentLegendIndex];
      student.legendId = currentLegend[0];
      student.background_color = currentLegend[5];
      student.LegendValue = currentLegend[2];
      student.LegendIndex = this.currentLegendIndex;

      
      console.log("this.currentLegendIndex====>xx11", this.currentLegendIndex);
     
      this.currentLegendIndex = (this.currentLegendIndex + 1) % this.attendanceLegend.length;
      
      this.old_stu_index=Key;
      
      
      
      
      
      this.selectedStudents.push(student);
      console.log("[this.selectedStudents.length===>", this.selectedStudents.length);
      const lastStudentKey = this.selectedStudents.length - 1;
      console.log("Key===>", Key);
      console.log("lastStudentKey===>", Key);
      
      
      console.log("this.selectedStudents===>11", this.selectedStudents);


      let tmpArr = { 'stuid': this.selectedStudents[lastStudentKey].stuid, 'legentid': this.selectedStudents[lastStudentKey].legendId };
      this.studentAttendanceContener.push(tmpArr);
    }
    console.log("this.selectedStudents====>", this.selectedStudents);

    // console.log('legendid ==>',legendid.detail.value);
    // console.log('studentid ==>',studentid);
    // let tmpArr ={'stuid':studentid,'legentid':legendid.detail.value};

    // this.studentAttendanceContener.push(tmpArr);
    console.log("this.studentAttendanceContener====>", this.studentAttendanceContener);
  }

  getLegendValueByLegendID(legendID: string): string {
    // Legend ID ke hisaab se LegendValue retrieve karein
    if (legendID === '1') {
      return 'Absent';
    } else if (legendID === '2') {
      return 'Leave';
    }
    return 'P'; // Default value
  }


  getBackgroundColorByLegendID(legendID: string): string {
    // Legend ID ke hisaab se background color retrieve karein
    if (legendID === '1') {
      return '#CC0000'; // Absent ke corresponding background color
    } else if (legendID === '2') {
      return '#CC8B00'; // Leave ke corresponding background color
    }
    return '#9bfd9b'; // Default background color
  }

  toggleCardColor22(student: any) {
    const currentLegend = this.attendanceLegend[this.currentLegendIndex];
    student.legendId = currentLegend[0];
    student.background_color = currentLegend[5];
    student.LegendValue = currentLegend[2];
    //student.background_color = currentLegend.color;
    this.currentLegendIndex = (this.currentLegendIndex + 1) % this.attendanceLegend.length;
   
    // student.background_color = this.SelectedLegendColor;
    // student.LegendValue = this.LegendValue;
    // student.legendId = this.SelectedLegendID;
    
    console.log("currentLegend Here====>", currentLegend);
    console.log("student.LegendValue Here====>", student);
  }

  toggleCardColor11(student: any) {


     const currentIndex = this.attendanceLegend.indexOf(student.LegendID); // Student ka current LegendID ka index nikalein
     const nextIndex = (currentIndex + 1) % this.attendanceLegend.length; // Next LegendID ka index calculate karein


     console.log("legendssssss=====>",this.attendanceLegend[nextIndex][0]);


     //student.LegendValue = this.getLegendValueByLegendID(this.attendanceLegend[nextIndex]); // Next LegendValue set karein
     //student.LegendID = this.attendanceLegend[nextIndex]; // Next LegendID set karein
     //student.background_color = this.getBackgroundColorByLegendID(student.LegendID); // Background color set karein

     console.log("background color legendssssss=====>",this.attendanceLegend[nextIndex][5]);

     student.LegendValue=this.attendanceLegend[nextIndex][2];
     student.LegendID=this.attendanceLegend[nextIndex][0];
     student.background_color =this.attendanceLegend[nextIndex][5];

    
    console.log("currentIndex---> ====>",currentIndex);
    console.log("this.attendanceLegend11 ====>", this.attendanceLegend);

    console.log("student.LegendValue ====>", student);
    // if (student.LegendValue === 'Absent') {
    //   student.LegendValue = 'Leave';
    //   student.background_color = '#CC8B00'; // Change background color for "Leave"
    // }
    // else {
    //   student.LegendValue = 'Absent';
    //   student.background_color = '#CC0000'; // Change background color for "Absent"
    // }
  }







  selectedLegend: string | null = null;
  LegendValue: string | null = null;
  getSelectedLegend1(legendId: string, color: string, event: MouseEvent) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent elements
    this.selectedLegend = color;

    // Do whatever you want with the selected legend, like storing it in your component or triggering other actions
  }

  // toggleCardColor(student: any) {
  //   const index = this.selectedStudents.indexOf(student);


  //  console.log("this.selectedStudents====>xx",this.selectedStudents);
  // // this.selectedStudents.splice(index, 1);
  //       student.background_color = this.SelectedLegendColor;
  //   this.selectedStudents.push(student);

  //   console.log("this.selectedStudents====>",this.selectedStudents);


  // }




  // Function to toggle card color
  toggleCardColor1(student: any) {
    // Check if the student is already selected

    const index = this.selectedStudents.indexOf(student);
    if (index !== -1) {
      // If selected, remove from the array
      console.log("Here We 1");
      this.selectedStudents.splice(index, 1);
    } else {
      // If not selected, add to the array
      console.log("Here We 2");
      this.selectedStudents.push(student);
    }
    console.log('this.selectedStudents==>', this.selectedStudents);
  }


    MarkAsHoliday()
    {
      this.attstudentlist.markasholiday(this.Date, this.transid).subscribe((res) => {
        console.log("res====>",res);
        this.toastservice.presentToast('Class Holiday Marked Successfully');
        this.router.navigate(['/teachAttCalender',this.transid,this.Date]);

      });
    }


  async MarkAsBulkHoliday()
    {

      const alertctrl =  await this.alert.create({
        header: 'Bulk Holiday',
        message: 'Do you want to Mark Bulk holiday for all Classes..!!',
        cssClass: 'buttoncsss',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
            handler: () => {
              console.log("aggreed here");

              this.attstudentlist.markBulkholiday(this.Date, this.transid).subscribe((res) => {
                console.log("res====>",res);
                this.toastservice.presentToast('Bulk Holiday Marked Successfully');
                this.router.navigate(['/teachAttCalender',this.transid,this.Date]);
        
              });
            }
          },
          {
            text: 'No',
            role: 'Cancel',
            handler: () => {
              console.log("Cancel Here here");
            }
          }
        ]
      });
          alertctrl.present();


  
    }

  isSelectedLegendId(selectedId: any): boolean {
    // Assuming you have a variable to store the selected legend ID
    console.log("selectedId===>", selectedId);
    return this.SelectedLegendID === selectedId;
  }


  isSelectedLegend(legend: any): boolean {
    //console.log("this.selectedLegend===>",this.selectedLegend);
    return this.selectedLegend === legend;
  }


  // Function to check if a student is selected
  isStudentSelected(student: any) {
    return this.selectedStudents.includes(student);
  }

  getstudentlist(date, transid) {
    this.attstudentlist.studentlist(date, transid).subscribe((res) => {
      console.log('student list data ==>', res);
      this.studentList = res['0']['AttendanceData'];
      this.attendanceLegend = res['0']['AttendanceLegendArr'];
// Define presentlegend as a valid TypeScript object
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


      this.attendanceLegend.push(presentlegend);
      console.log('this.studentList ==>', this.studentList);
      console.log('this.attendanceLegend ==>', this.attendanceLegend);
    })
  }



  saveAttendance(legendid: any, studentid: any) {
    console.log('legendid ==>', legendid.detail.value);
    console.log('studentid ==>', studentid);
    let tmpArr = { 'stuid': studentid, 'legentid': legendid.detail.value };

    this.studentAttendanceContener.push(tmpArr);
    console.log('this.studentAttendanceContener ==>', this.studentAttendanceContener);
  }
  from_date(fromdate) {
    //  console.log('fromdate====>',fromdate);
    //  this.fromdate=this.changeDateFormat_from(fromdate);
    //  console.log('this.fromdate====>',this.fromdate);
    console.log('dateParts====>', this.dateParts);
    this.dateParts = fromdate.substring(0, 10).split("-");
    this.dateParts = this.dateParts[2] + '-' + this.dateParts[1] + '-' + this.dateParts[0];


    this.dateymd = fromdate.substring(0, 10).split("-");
    this.dateymd = this.dateymd[0] + '-' + this.dateymd[1] + '-' + this.dateymd[2];

    console.log('this.dateymd====>', this.dateymd);
    if (this.dateParts == 'undefined-undefined-') {
      console.log('date==-->', fromdate);
      this.dateParts = ' ';
    }
    else {
      console.log('this.dateParts====>', this.dateParts);
      this.dateParts = this.dateParts;
    }

    if (this.dateParts && this.transid) {
      this.getstudentlist(this.dateymd, this.transid);
    }

  }

  gettransid(event) {
    this.transid = event.detail.value;
    console.log('this.transid==>', this.transid);

    if (this.dateParts && this.transid) {
      this.getstudentlist(this.dateymd, this.transid);
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
      console.log('this.dateParts====>', this.dateParts);
      this.dateParts = this.dateParts;
    }


  }
  setAttendance() {
    //let studentsStr ='';
    this.studentsStr = '';
    console.log('before studentsStr ==>', this.studentsStr);
    console.log('before studentAttendanceContener ==>', this.studentAttendanceContener);
    // for (let topLevel of this.studentAttendanceContener) {
    //   if (this.studentsStr == '') {
    //     this.studentsStr += topLevel.stuid + '^' + topLevel.legentid;
    //   }
    //   else {
    //     this.studentsStr += '_' + topLevel.stuid + '^' + topLevel.legentid;
    //   }
    // }


      let latestMap: any = {};

      for (let topLevel of this.studentAttendanceContener) {
        latestMap[topLevel.stuid] = topLevel.legentid; // overwrite karega same stuid par
      }

      // Step 2: String banana with your existing format
      this.studentsStr = '';

      for (let [stuid, legentid] of Object.entries(latestMap)) {
        if (this.studentsStr == '') {
          this.studentsStr += stuid + '^' + legentid;
          console.log("here 1", this.studentsStr);
        } else {
          this.studentsStr += '_' + stuid + '^' + legentid;
          console.log("here 2", this.studentsStr);
        }
      }


    console.log('after studentsStr ==>', this.studentsStr);
    console.log('this.dateymd ==>', this.dateymd);
    console.log('this.transid ==>', this.transid);

    this.attstudentlist.markattendance(this.studentsStr, this.dateymd, this.transid).subscribe(async (res) => {
      console.log('saved attendance result', res);
      this.toastservice.presentToast('Attendance Marked Successfully');


      this.attstudentlist.send_notification(this.dateymd, this.transid).subscribe((resnoti) => {
        console.log('notification attendance result', resnoti);
        //this.toastservice.presentToast('Attendance Marked Successfully');
  
      })





      // const alertctrl =  await this.alert.create({
      //   header: 'Send SMS',
      //   message: 'Do you want to send SMS to Absent Students',
      //   cssClass: 'buttoncsss',
      //   buttons: [
      //     {
      //       text: 'Yes',
      //       role: 'confirm',
      //       handler: () => {
      //         console.log("aggreed here");

      //        this.attstudentlist.send_message_to_absent_student(this.dateymd, this.transid).subscribe((resnoti) => {
      //         console.log('SMS attendance result', resnoti);
      //       })
      //       }
      //     },
      //     {
      //       text: 'No',
      //       role: 'Cancel',
      //       handler: () => {
      //         console.log("Cancel Here here");
      //       }
      //     }
      //   ]
      // });
      //     alertctrl.present();

      


      this.router.navigate(['/teachAttCalender',this.transid,this.Date]);
    })



  



  }










}

//let apiURL=this.markAttendanceAPIURL+'date='+ this.myDate+'&tid='+tid+'&transid='+this.myClassId+'&studentLegendData='+studentsStr;

