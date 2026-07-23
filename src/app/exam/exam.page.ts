import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { MarkattendanceService } from 'src/app/services/markattendance.service';
import { ToastService } from 'src/app/services/toast.service';
import { IonModal } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
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
  responseJson: any = [];
  ExamArray: any = [];
  SubjectArray: any = [];
  StudentArray: any = [];
  examsubdivtransid: any;
  subid: any;
  include_in_gt: any;
  maxmarks: any;
  minmarks: any;
  abc: any;
  details: any;
  marksentered: any;
  Ismarks_Entered: any;
  markty: any;
  ClassName: any;
  IsClassTeacher: any;
  ClassArrayMarks: any = [];
  ClassArrayMarksObject: any = [];
  SubjectName: any;
  SelectedClassName: any;
  ExamName: any;
  MainExamName: any;
  IsGraddedSubject: any;
  Grades: any = [];
  Marks_Legend_Value: any;
  Marks_Legend_ValueLegend: any;
  ShowGrades: any;
  MaxmarksView:any;
  MinmarksView:any;
  subjectlevelid:any;
  subjectlevelName:any;
  constructor(private eventservice: EventService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService, private attstudentlist: MarkattendanceService, private toastservice: ToastService) { }

  ngOnInit() {
    this.marksentered = 'N';
    this.SessStart = localStorage.getItem('SessStart');

    this.transid = this.route.snapshot.paramMap.get('id');
    this.examsubdivtransid = this.route.snapshot.paramMap.get('id1');
    this.subid = this.route.snapshot.paramMap.get('id2');
    this.SubjectName = this.route.snapshot.paramMap.get('id4');
     this.SelectedClassName = this.route.snapshot.paramMap.get('id5');
    this.ExamName = this.route.snapshot.paramMap.get('id6');

    this.MainExamName = this.route.snapshot.paramMap.get('id7');
    
     this.subjectlevelid = this.route.snapshot.paramMap.get('id8');

     this.subjectlevelName= this.route.snapshot.paramMap.get('id9');

     if(this.subjectlevelName == '000')
     {
      this.subjectlevelName = '';
     }
     else
     {
      this.subjectlevelName = ' >> '+this.subjectlevelName;
     }




     console.log('subject levelss==>',this.subjectlevelid);
     
    console.log('IDSSSSSS==>', this.transid, this.examsubdivtransid, this.subid);

     this.checkmarksdetail(this.examsubdivtransid, this.subid, this.transid);
    //this.checkmarksdetail(this.examsubdivtransid, this.subid,this.transid);
    this.getstudent(this.examsubdivtransid, this.subid);

    console.log('this.ClassArrayMarks xxx==>', this.ClassArrayMarks);

    if (localStorage.getItem('IsClassTeacher') == 'Y') {
      //  this.transid  =localStorage.getItem('transid');
    }
    else {
      this.ClassArrayMarks = JSON.parse(localStorage.getItem('ClassArrayMarks'));
      //  console.log('this.ClassArrayMarks==>',this.ClassArrayMarks);
      // this.transid=this.ClassArrayMarks[5].transid;
    }
    //console.log("this.transidthis.transidthis.transid=>",this.transid);
    console.log("this.transid===>", this.transid);

    console.log("localStorage.getItem('transid')===>", localStorage.getItem('transid'));


    this.IsClassTeacher = localStorage.getItem('IsClassTeacher');

    console.log("this.ExamArray ==>", this.ExamArray);
    console.log("this.SubjectArray ==>", this.SubjectArray);
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



    this.getmarkstype();
    console.log('this.maxmarks==> Here', this.maxmarks);
    this.getminmarks();
  }

  
  getminmarks()
  {
    if(this.subjectlevelid)
    {
      this.subjectlevelid = this.subjectlevelid;
    }
    else
      {
      this.subjectlevelid = '00';
      }
    this.attstudentlist.MinMaxMarks(this.examsubdivtransid, this.subid, this.transid,this.subjectlevelid).subscribe((res) => {
      console.log("MinMaxMarks =>", res);
      if(res.maxmarks)
        {
          this.MaxmarksView='Max- '+res.maxmarks;
        }
      if(res.minmarks)
        {
          this.MinmarksView='Min-'+res.minmarks;
        }
      
      //this.Ismarks_Entered = res;
    });
  }

  getmarkstype() {
    this.attstudentlist.markstype(this.transid, this.examsubdivtransid, this.subid,this.subjectlevelid).subscribe((res) => {
      console.log("this.res ==>", res);
      this.IsGraddedSubject = res['isgraded'];
      this.Grades = res['gname'];
      console.log("this.IsGraddedSubject ==>", this.IsGraddedSubject);
      console.log("this.Grades ==>", this.Grades);

     })
  }

  proceed() {
    console.log('this.include_in_gt==>', this.include_in_gt);
    console.log('this.abc==>', this.abc);
    console.log('this.details==>', this.details);
    console.log('this.maxmarks==>', this.maxmarks);
    //this.modal.dismiss(this.maxmarks,this.minmarks,this.abc,this.include_in_gt,this.details,'confirm');

    // this.attstudentlist.CreateExamDetail(this.maxmarks, this.minmarks, this.include_in_gt, this.details, this.examsubdivtransid, this.subid,
    // localStorage.getItem('transid')).subscribe((res) => {
    // this.attstudentlist.CreateExamDetail(this.maxmarks, this.minmarks, this.include_in_gt, this.details, this.examsubdivtransid, this.subid,
    //    this.transid).subscribe((res) => {
    //   console.log("Created ExamMarks ==>", res);
    //   this.checkmarksdetail(this.examsubdivtransid, this.subid,this.transid);
    //   this.getstudent(this.examsubdivtransid,this.subid);
    // })
    this.modal.dismiss({
      maxMarks: this.maxmarks,
      minMarks: this.minmarks,
      abcValue: this.abc,
      includeInGt: this.include_in_gt,
      detailsValue: this.details,
    }, 'confirm');


    this.marksentered = 'Y';
    //how to multiple  values from modal in ionic v6
  }



  getstudent(examsubdivtransid, subid) {
    console.log('Subject Ids ==>', subid);
    //this.attstudentlist.getstudentlist(localStorage.getItem('transid'),examsubdivtransid,subid).subscribe((res) => {
    this.attstudentlist.getstudentlist(this.transid, examsubdivtransid, subid, this.subjectlevelid).subscribe((res) => {
      this.responseJson = res;
      console.log('this.responseJson res==>', res);
      console.log("this.transid------>", this.transid);
      // this.ExamArray = this.responseJson.ExamArray.Exams;
      // this.SubjectArray = this.responseJson.SubjectArray.Subjects;
      this.StudentArray = this.responseJson.StudentArray.Students;
      console.log("this.StudentArray Here==>", this.StudentArray);
    });
  }
  //added for class

  //added for class ends



  checkmarksdetail(examsubdivtransid, subid, transid) {
    console.log("examsubdivtransid", examsubdivtransid);
    console.log("subid", subid);

    // this.attstudentlist.Getmarksdetails(examsubdivtransid, subid, localStorage.getItem('transid')).subscribe((res) => {
    this.attstudentlist.Getmarksdetails(examsubdivtransid, subid, transid).subscribe((res) => {
      console.log("Getmarksdetails =>", res);
      this.Ismarks_Entered = res;
    });

  }



  submitmarks(indexval,event, stuid, type, examsubdivtransid, subid, isgradded, maxmarksValue, GradeorLegend) {


    /*
    if(FullEvent == 'Other')
    {
      this.showGrades='showgraders_'+stuid;
    }
    */
    console.log("here we are", stuid);
    console.log("Main event ==>", event);
    console.log("Att type ==>", type);
    console.log("this.subid 11==>", subid);
    console.log("examsubdivtransid 11==>", examsubdivtransid);
    console.log("isgradded.isgradded ==>", isgradded['0']);
    console.log("indexval==>", indexval);
    console.log("GradeorLegend==>", GradeorLegend);
    
    if(this.subjectlevelid)
    {
      this.subjectlevelid = this.subjectlevelid;
    }
    else
      {
      this.subjectlevelid = '00';
      }

    //this.Marks_Legend_Value = event;
    // let TransID = localStorage.getItem('transid');
    let TransID = this.transid;

    if (isgradded['0'] == 'Y') {
      // if()
      if (event == 'Other') {
        this.ShowGrades = 'ShowGrades_' + stuid;
        console.log("this.ShowGrades", this.ShowGrades);
       // for (let k = 0; k < this.StudentArray.length; k++) {
          // Initialize OtherMarks as an array if it's not already
          if (!Array.isArray(this.StudentArray[indexval]['OtherMarks'])) {
            this.StudentArray[indexval]['OtherMarks'] = [];
          }
          // Push 'Y' into the OtherMarks array
          this.StudentArray[indexval]['OtherMarks'].push('Y');
          console.log('ksss =>', indexval);
        //}
          console.log("this.StudentArray==>>>",this.StudentArray);

      }
      else if (event != 'Other') { //console.log()
        this.Marks_Legend_ValueLegend = event;
        
        if(this.Marks_Legend_ValueLegend != ' ')
          {
          this.attstudentlist.MarkAtt(this.Marks_Legend_ValueLegend, stuid, TransID, type, examsubdivtransid, subid, isgradded,this.subjectlevelid).subscribe((res) => {
            console.log("response Graded=>", res);
          });
         }
        

      }


    }
    else {
      if (event) {
        console.log("Here We are");
        this.Marks_Legend_Value = Number(event);


        let maxmarksVal = Number(maxmarksValue);


        console.log("this.event", event);
        console.log("this.maxmarksValueare", maxmarksValue);
        console.log("maxmarksVal are ==>", maxmarksVal);
        console.log("this.Marks_Legend_Value are", this.Marks_Legend_Value);


        if (this.Marks_Legend_Value > maxmarksVal) {
          this.toastservice.presentToast("Mark Cannot Be Greater than Maxmarks..!!");
          return false;
        }
        else if (this.Marks_Legend_Value <= maxmarksVal) {
          console.log("Here We are 2");
          this.attstudentlist.MarkAtt(this.Marks_Legend_Value, stuid, TransID, type, examsubdivtransid, subid, isgradded,this.subjectlevelid).subscribe((res) => {
            console.log("response =>", res);
          });
        }
        else if (type == 'islegend') {
          console.log("Here We are 3",type);
          this.attstudentlist.MarkAtt(event, stuid, TransID, type, examsubdivtransid, subid, isgradded,this.subjectlevelid).subscribe((res) => {
            console.log("response =>", res);
          });
        }
        else if (!this.Marks_Legend_Value) {
          console.log("Here We are 4",this.Marks_Legend_Value);
          this.attstudentlist.MarkAtt(this.Marks_Legend_Value, stuid, TransID, type, examsubdivtransid, subid, isgradded,this.subjectlevelid).subscribe((res) => {
            console.log("response 1=>", res);
          });
        }
        
       
        {

        }
      }
      else
      {
        console.log("Not Event===>",event);
        this.attstudentlist.MarkAtt(event, stuid, TransID, type, examsubdivtransid, subid, isgradded,this.subjectlevelid).subscribe((res) => {
          console.log("response 5=>", res);
        });
      }
    }




    console.log("this.examsubdivtransid ==>", this.examsubdivtransid);
    console.log("localStorage.getItem('transid')->", localStorage.getItem('transid'));
    console.log("this.subid ==>", this.subid);
    console.log("TransID ->this.subid ==>", TransID);

    console.log("TransID ->this.Marks_Legend_Value ==>", this.Marks_Legend_Value);

    //return false;



  }



}




