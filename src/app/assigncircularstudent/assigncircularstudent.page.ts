import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LeaveapplicationService } from 'src/app/services/leaveapplication.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AttendanceService } from 'src/app/services/attendance.service';
import { FeesService } from 'src/app/services/fees.service';
import { CircularService } from 'src/app/services/circular.service';
import { ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-assigncircularstudent',
  templateUrl: './assigncircularstudent.page.html',
  styleUrls: ['./assigncircularstudent.page.scss'],
})
export class AssigncircularstudentPage implements OnInit {
  category: any;
  fromdate: any;
  todate: any;
  dateParts: any;
  dateParts_to: any;
  status: any;
  message: any;
  applied_leaves: any = [];
  public title = '';
  public reason = '';
  ionicForm: FormGroup;
  ClassArray: any = [];
  SelectedTransid: any;
  CircularType: any;
  studentlist: any;
  AssignedCircular: any = [];
  CircularId: any;
  Selected_Students: any = [];
  ScirTransId: any;
  AssignedCircularLength:any;
  constructor(private toast: ToastService, private feeservice: FeesService, private alert: AlertController, private route: ActivatedRoute, private CircularService: CircularService, private attendanceservice: AttendanceService, private Leaveapplicationservice: LeaveapplicationService, private router: Router, private ionLoaderService: IonLoaderService,
    public formBuilder: FormBuilder) {
    this.CircularId = this.route.snapshot.paramMap.get('id');
    this.assignedstudents();
  }

  ngOnInit() {
    this.category = 'applicationlist';
    //this.ionLoaderService.simpleLoader();
    this.Leaveapplicationservice.applied_leaves().subscribe((res) => {
      console.log('applied leaves --> ', res);
      this.status = res['status'];
      this.message = res['message'];

      this.applied_leaves = res;
      //this.circulars_object = Object.keys(res['data']);
      console.log('this.applied_leaves ==>', this.applied_leaves);



      console.log('this.message ==>', this.message);

      this.status = res.status;
      console.log('this.status====>', this.status);


      this.ionLoaderService.dismissLoader();
    });
    //this.ionLoaderService.dismissLoader();


    this.ionicForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      title: ['', [Validators.required]],
      reason: ['', [Validators.required]]

    })


    this.attendanceservice.AllClassList().subscribe((res) => {
      console.log('teachstulist ==>', res);
      this.ClassArray = res;
      console.log('this.ClassArray ==>', this.ClassArray);
    })
  }

  SelectCircular(type) {
    console.log("type==>", type.detail.value);
    this.CircularType = type.detail.value;


  }

  checkboxChanged(event, studentlist, SeleStuid) {
    console.log('studentlist==>', studentlist);
    if (event.target.checked) {
      this.Selected_Students = [];

      for (let k = 0; k < studentlist.length; k++) {
        if (SeleStuid == this.studentlist[k].stuid) {
          this.studentlist[k].stus_checked = true;
        }
        this.Selected_Students.push(this.studentlist[k]);
      }
    }
    else {

      for (let k = 0; k < studentlist.length; k++) {
        this.Selected_Students.push(studentlist[k]);
        if (SeleStuid == this.studentlist[k].stuid) {
          this.studentlist[k].stus_checked = false;
        }
        const index = this.Selected_Students.indexOf(studentlist[k]);
        console.log("index[k]---->", index);
        if (index > -1) {
          this.Selected_Students.splice(index, 1); // use index found, not k
        }
      }
    }


    console.log("this.Selected_Students==>", this.Selected_Students);
  }

  async AssignCircular() {


    if (this.CircularType == 'all') {
      const alertctrl = await this.alert.create({
        header: 'Assign Circular',
        message: 'Do you want to Send To All..!!',
        cssClass: 'buttoncsss',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
            handler: () => {

              //return false;

              this.CircularService.InsertStudentCircular(JSON.stringify(this.Selected_Students), this.CircularId, this.CircularType).subscribe((res) => {
                console.log('assign CCircular list', res);
                this.toast.presentToast(res);
                this.gettransid(this.SelectedTransid, 'Y');
                this.assignedstudents();
                //this.studentlist = res;
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
    else {

      this.CircularService.InsertStudentCircular(JSON.stringify(this.Selected_Students), this.CircularId, this.CircularType).subscribe((res) => {
        console.log('assign CCircular list', res);
        this.toast.presentToast(res);
        this.gettransid(this.SelectedTransid, 'Y');
        this.assignedstudents();
        //this.studentlist = res;
      });

    }



  }

 async deletestudent(DeleteType,stuid,Circular_Trans_Id)
  {
    const alertctrl = await this.alert.create({
      header: 'Delete Circular',
      message: 'Do you want to Delete..!!',
      cssClass: 'buttoncsss',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {

            //return false;

          this.CircularService.DeleteStudentCircular(this.CircularId,DeleteType,stuid,Circular_Trans_Id,'S').subscribe((res) => {
              console.log('delete Circular', res);
              this.toast.presentToast(res);
              this.assignedstudents();
              //this.studentlist = res;
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


  gettransid(event, AfterAssign) {
    console.log('transid ===>', event);



    if (AfterAssign == 'Y') {
      this.ScirTransId = event;
    }
    else {
      this.ScirTransId = event.detail.value;
      this.SelectedTransid = event.detail.value;
    }
    this.CircularService.CircularStudentList(this.ScirTransId, this.CircularId).subscribe((res) => {
      console.log('Student List details==>', res);
      this.studentlist = res;
    });

  }

  //check assign student in circular
  assignedstudents() {
    this.CircularService.AssignedCircularStudent(this.CircularId).subscribe((res) => {
      console.log('Assigner Circular List details==>', res);
      this.AssignedCircular = res;
      //this.AssignedCircularLength = this.AssignedCircular.length;
      console.log('this.AssignedCircularLength==>', this.AssignedCircular);

    });
  }





}


