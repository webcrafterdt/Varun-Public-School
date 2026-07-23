import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LeaveapplicationService } from 'src/app/services/leaveapplication.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-assignhomework',
  templateUrl: './assignhomework.page.html',
  styleUrls: ['./assignhomework.page.scss'],
})
export class AssignhomeworkPage implements OnInit {
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

  constructor(private toast: ToastService, private Leaveapplicationservice: LeaveapplicationService, private router: Router, private ionLoaderService: IonLoaderService,
    public formBuilder: FormBuilder) { }

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
  }

  apply_leave() {
    console.log('this.title==>', this.title);
    console.log('this.reason==>', this.reason);
    console.log('this.from==>', this.dateParts);
    console.log('this.to==>', this.dateParts_to);


    this.Leaveapplicationservice.apply_leave(this.title, this.reason, this.dateParts, this.dateParts_to).subscribe((res) => {
      console.log('applied leaves --> ', res);
      // this.status = res['status'];
      // this.message = res['message'];


      this.toast.presentToast(this.message);
      this.ngOnInit();
      this.title = ' ';
      this.reason = ' ';
      this.dateParts = ' ';
      this.dateParts_to = ' ';
    });
    this.ionLoaderService.dismissLoader();

  }

  add_new_homework()
  {
    this.router.navigate(['/newhomework']);
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


    console.log('fromdate====>', todate);
    this.todate = this.changeDateFormat_to(todate);
    console.log('this.todate====>', this.todate);
  }
}


