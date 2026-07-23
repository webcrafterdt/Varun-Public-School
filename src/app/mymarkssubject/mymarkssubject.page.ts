import { Component, OnInit, Optional, ViewChild } from '@angular/core';
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
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-mymarkssubject',
  templateUrl: './mymarkssubject.page.html',
  styleUrls: ['./mymarkssubject.page.scss'],
})
export class MymarkssubjectPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
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
  //details: any = [];
  details: any;
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
  transid: any;
  responseJson: any = [];
  ExamArray: any = [];
  ClassName: any = [];
  SubjectArray: any = [];
  examsubdivid: any;
  SubjectsExists: any;
  ExamName: any;
  SelectedClassName: any;
  MainExamName: any;
  Ismarks_Entered: any = [];
  Ismarks_EnteredSubjectWise: any = [];
  include_in_gt: any;
  maxmarks: any;
  minmarks: any;
  markty: any;
  abc: any;
  IncludeInGTTotal:any;
  StudentArray:any=[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private toastservice: ToastService, private alert: AlertController, private feeservice: FeesService, private modalCtrl: ModalController, private attstudentlist: MarkattendanceService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);

    this.transid = this.route.snapshot.paramMap.get('id');
    this.examsubdivid = this.route.snapshot.paramMap.get('id1');
    this.ExamName = this.route.snapshot.paramMap.get('id2');
    this.SelectedClassName = this.route.snapshot.paramMap.get('id3');
    this.MainExamName = this.route.snapshot.paramMap.get('id4');

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


    this.ionLoaderService.autoLoader();
    this.attstudentlist.Getmarksdetails(this.examsubdivid, '', this.transid).subscribe((res) => {
      console.log("Getmarksdetails =>", res);
      //this.Ismarks_Entered=[];
      
      this.Ismarks_Entered = res;
      console.log("this.Ismarks_Entered==>", this.Ismarks_Entered['2']);
     // this.ionLoaderService.dismissLoader();
     // this.Ismarks_EnteredSubjectWise = Object.keys(this.Ismarks_Entered);
      
      //console.log("this.Ismarks_EnteredSubjectWise==>", this.Ismarks_EnteredSubjectWise);
    });


    this.SessStart = localStorage.getItem('SessStart');
    let date = (new Date()).toISOString();
    this.currentDate = date.toString().substring(0, 10);
    console.log('currentDate====>', this.currentDate);
    const storedJsonArray = localStorage.getItem('ClassSection');
    this.Class_Data = JSON.parse(storedJsonArray);
    console.log('this.Class_Data==>', this.Class_Data);


    console.log('this.Class_Data==>this.transid', this.transid);
    
   //  this.attstudentlist.getstudentlist(this.transid, '', '').subscribe((res) => {
    //this.attstudentlist.getstudentlist(this.transid, this.examsubdivid, '','').subscribe((res) => {
    this.attstudentlist.getmymarksexam(this.transid, this.examsubdivid, '','').subscribe((res) => {
    
      this.responseJson = res;
      console.log('this.responseJson res==>', res);

      if (localStorage.getItem('IsClassTeacher') == 'Y') {
        this.ExamArray = this.responseJson.ExamArray.Exams;//commented 
        this.SubjectArray = this.responseJson.SubjectArray.Subjects; //commented
        // this.ClassName=this.responseJson.classname;
      }
      else {
        this.ClassName = this.responseJson.classname;
        this.ExamArray = this.responseJson.ExamArray.Exams;//commented 
        this.SubjectArray = this.responseJson.SubjectArray.Subjects; //commented
      }

      console.log('this.ExamArray res==>', this.ExamArray);
      console.log('this.SubjectArray res==>111', this.SubjectArray);

      if (this.SubjectArray.length > 0)
      //if(this.responseJson.ExamArray.length > 0)
      {
        this.SubjectsExists = 'Y';
      }
      else {
        this.SubjectsExists = 'N';
      }

      //  this.StudentArray = this.responseJson.StudentArray.Students
    });






  }
  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

//View Marks Modal Cancel
  async ViewMarksCancel(modelId: string) {
    const modal = await this.modalCtrl.getTop();
    if (modal && modal.id == modelId) {
      await modal.dismiss(null, 'cancel');
    }
  }


//Add marks Modal Cancel
  async cancel(modalId: string) {
    const modal = await this.modalCtrl.getTop();
    console.log("modal==>", modal);
    if (modal && modal.id === modalId) {
      await modal.dismiss(null, 'cancel');
    }
    this.maxmarks = '';
    this.minmarks = '';
    this.markty = '';
    this.include_in_gt = '';
    this.details = '';
  }



  



  validateMarks() {
    console.log('maxmarks:', this.maxmarks, typeof this.maxmarks);

    console.log('minmarks:', this.minmarks, typeof this.minmarks);


    // Convert to numbers using Number() or parseInt()
    const min = Number(this.minmarks);
    const max = Number(this.maxmarks);

    // Perform comparison
    const isValid = min > max;
    console.log('Validation result:', isValid);

    return isValid;
  }

  validateval() {
    return this.details;
  }
  includegrandtotal() {
    return this.include_in_gt;
  }

  minmarksvalidate() {
    return this.minmarks;
  }

    maxmarksvalidate() {
    return this.maxmarks;
  }
  markstype() {
    this.markty;
  }


  proceed(SubjectID, subname,levelid) {
    console.log('this.include_in_gt==>', this.include_in_gt);
    //console.log('this.abc==>', this.abc);
    console.log('this.details==>', this.details);
    console.log('this.maxmarks==>', this.maxmarks);
    console.log('this.markty==>', this.markty);
    console.log('this.abc==>', this.abc);
    console.log('SubjectIDabc==>', SubjectID);

    //return false;
    const min = Number(this.minmarks);
    const max = Number(this.maxmarks);

    // Perform comparison
    //const isValid = min > max;
    //console.log('Validation result:', isValid);

    //if Gradded Type then this will not work
    if(this.markty != 'Y')
      {
        if(max == 0)
          {
            this.toastservice.presentToast("Max. Marks Should be greater than 0..!!");
            return false;  
          }
          if(min == 0)
            {
              this.toastservice.presentToast("Min. Marks Should be greater than 0..!!");
              return false;  
            }
          
        if (min > max) {
          this.toastservice.presentToast("Min. Marks Canoont Be Greate than Max. Marks");
          return false;
        }
        if (!this.maxmarks) {
          this.toastservice.presentToast('MaxMarks Cannot Be Blank..!!');
          return false;
        }
    
        if (!this.minmarks) {
          this.toastservice.presentToast('MinMarks Cannot Be Blank..!!');
          return false;
        }
        if (!this.include_in_gt) {
          this.toastservice.presentToast('Please Select Is GrandTotal..!!');
          return false;
        }
      }



  
    if (!this.markty) {
      this.toastservice.presentToast('Please Select Marks Type..!!');
      return false;
    }

 
    if (!this.details) {
      this.toastservice.presentToast('Please Enter Detail..!!');
      return false;
    }

    //this.modal.dismiss(this.maxmarks,this.minmarks,this.abc,this.include_in_gt,this.details,'confirm');
    //return false;
    // this.attstudentlist.CreateExamDetail(this.maxmarks, this.minmarks, this.include_in_gt, this.details, this.examsubdivtransid, this.subid,
    // localStorage.getItem('transid')).subscribe((res) => {
    //this.attstudentlist.CreateExamDetail(this.maxmarks, this.minmarks, this.include_in_gt, this.details, this.examsubdivid, this.subid,
    console.log("this.markty====>",this.markty);
    this.attstudentlist.CreateExamDetail(this.maxmarks, this.minmarks, this.include_in_gt, this.details, this.examsubdivid, SubjectID
      ,this.transid,this.markty,levelid).subscribe((res) => {
        console.log("Created ExamMarks ==>", res);
        //this.checkmarksdetail(this.examsubdivtransid, this.subid,this.transid);
        //this.getstudent(this.examsubdivtransid,this.subid);
      })
console.log("hereee");


// async cancel(modalId: string) {
//   const modal = await this.modalCtrl.getTop();
//   console.log("modal==>", modal);
//   if (modal && modal.id === modalId) {
//     await modal.dismiss(null, 'cancel');
//   }
//   this.maxmarks = '';
//   this.minmarks = '';
//   this.markty = '';
//   this.include_in_gt = '';
//   this.details = '';
// }

//const modal = await this.modalCtrl.getTop();

console.log("levelid ====>",levelid);
if(!levelid)
{
  console.log("here we ====>",levelid);
this.cancel('modal-' + SubjectID);
    this.modal.dismiss({
      maxMarks: this.maxmarks,
      minMarks: this.minmarks,
      markty: this.markty,
      includeInGt: this.include_in_gt,
      detailsValue: this.details,
    }, 'confirm');
}
else
{
 console.log("there we") ;
  this.cancel('modal-' + SubjectID + levelid);
    this.modal.dismiss({
      maxMarks: this.maxmarks,
      minMarks: this.minmarks,
      markty: this.markty,
      includeInGt: this.include_in_gt,
      detailsValue: this.details,
    }, 'confirm');
}

console.log("Aftereeeee");


this.ngOnInit();
this.MarksEntry(SubjectID, subname, this.SelectedClassName, this.ExamName, this.MainExamName)


    // this.modal.onDidDismiss().then((data) => {
    //   if (data.role === 'confirm') {
    //     this.maxmarks = '';
    //     this.minmarks = '';
    //     this.markty = '';
    //     this.include_in_gt = '';
    //     this.details = '';
    //     this.ngOnInit();
    //     this.MarksEntry(SubjectID, subname, this.SelectedClassName, this.ExamName, this.MainExamName)
    //   }
    // });


    // this.maxmarks = '';
    // this.minmarks = '';
    // this.markty = '';
    // this.include_in_gt = '';
    // this.details = '';
    // this.ngOnInit();
    //this.MarksEntry(SubjectID, subname, this.SelectedClassName, this.ExamName, this.MainExamName)
  }

  MarksEntry(id, id4, id5, id6, id7) {
    console.log("id====>xxxx", id);
    this.router.navigate(["/exam", this.transid, this.examsubdivid, id, id4, id5, id6, id7]);
  }

  EditMarks(id, id4, id5, id6, id7, id8,id9) {
    console.log("id====>xxxx AAAA", id);
    console.log("id====>xxxx BBBB", id4);
    console.log("id====>xxxx CCCC", id5);
    console.log("id====>xxxx DDDD", id6);
    console.log("id====>xxxx EEEE", id7);
    console.log("id====>xxxx FFFF", id8);

  if(id8 == undefined)
  {
    id8 = '00'
  }

  //for level name
  if(id9 == undefined)
  {
    id9 = '000'
  }

    this.router.navigate(["/exam", this.transid, this.examsubdivid, id, id4, id5, id6, id7, id8, id9]);
  }

//To Get Student Marks For View Marks
  getstudent(examsubdivtransid,subid,levelid) {
    console.log('Subject Ids ==>',subid);
    //this.attstudentlist.getstudentlist(localStorage.getItem('transid'),examsubdivtransid,subid).subscribe((res) => {
      this.attstudentlist.getstudentlist(this.transid,examsubdivtransid,subid,levelid).subscribe((res) => {
      this.responseJson = res;
      console.log('this.responseJson res==>', res);
      console.log("this.transid------>",this.transid);
      // this.ExamArray = this.responseJson.ExamArray.Exams;
      // this.SubjectArray = this.responseJson.SubjectArray.Subjects;
      this.StudentArray = this.responseJson.StudentArray.Students;
      console.log("this.StudentArray Here==>", this.StudentArray);
    });
  }
 
  // isInInterest(cathegory:string)
  // {
  //   console.log("cathegory===>",cathegory);
  //  // return this.artistInterests.find(x=>x.artist==cathegory)?true:false
  // }
  ChangeValue(event,subidss,levelid){
    console.log('event ==>',event);
    console.log('subidss ==>',subidss);
    console.log('event ariaChecked==>',event.srcElement.ariaChecked);
    if(event.srcElement.ariaChecked == 'false')
      {
        this.IncludeInGTTotal='Y';
      }
      else
      {
        this.IncludeInGTTotal='N';
      }
    
    console.log('this.IncludeInGTTotal ==>',this.IncludeInGTTotal);


    this.attstudentlist.UpdateMarksSetting(this.transid,this.examsubdivid,subidss,this.IncludeInGTTotal,levelid).subscribe((res) => {
      
      console.log("Marks Settings Updated here ==> ", res);
      this.toastservice.presentToast(res);
    });

      
  }
  getsubjectid(subjectid,levelid) {
    this.getstudent(this.examsubdivid,subjectid,levelid);
     console.log("subjectid==> here we are",subjectid);
    //     this.attstudentlist.Getmarksdetails(this.examsubdivid, subjectid, this.transid).subscribe((res) => {
    //   console.log("Getmarksdetails =>", res);
    //   this.Ismarks_Entered = res;
    //   console.log("this.Ismarks_Entered==>",this.Ismarks_Entered);
    // });

    

  }

  async MarksDelete(SubjectID,levelid) {


    const alertctrl = await this.alert.create({
      header: 'Delete marks',
      message: 'Do you want to Delete marks..!!',
      cssClass: 'buttoncsss',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            console.log("aggreed here");
            console.log("Created this.examsubdivid ==>", this.examsubdivid);
            console.log("Created SubjectID ==>", SubjectID);
            console.log("Created this.transid ==>", this.transid);
            console.log("levelid.transidlevelid ==>", levelid);
            //return false;
            if(levelid)
            {
              levelid =levelid;
            }
            else
            {
              levelid = '00';
            }
            this.attstudentlist.DeleteMarks(this.examsubdivid, SubjectID, this.transid,levelid).subscribe((res) => {
              console.log("Created ExamMarks ==>", res);
              //  this.constructor();
              this.toastservice.presentToast("Marks Detail Deleted Successfully..!!");
              this.ngOnInit();

            })

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
  getlocalstoragedata() {
    return Promise.all([localStorage.getItem('f_id'), localStorage.getItem('college'), localStorage.getItem('session')]).then((values) => {
      console.log("here i am right now =>", values);
      this.f_id = values['0'];
      this.college = values['1'];
      this.session = values['2'];

    });

  }


  ClassWiseAttendance(id) {
    this.router.navigate(["teachAttCalender", id]);
  }


  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
    //Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
