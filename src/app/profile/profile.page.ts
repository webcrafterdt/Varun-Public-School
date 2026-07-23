import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }
  fname:any;
  emailid:any;
  phoneno:any;
  admno:any;
  address1:any;
  name:any;
  image:any;
  address:any;
  last_name:any;
  fathername:any;
  localimage:any;
  batch_name:any;
  image_big:any;
  user_hostel:any;
  bordercolor:any;
  blood_group:any;
  date_of_admission:any;
  studentname:any;
  classname:any;
  ngOnInit() {
    this.image_big=0;
    this.studentname=localStorage.getItem('studentname');
    this.fname=localStorage.getItem('first_name');
    this.last_name=localStorage.getItem('last_name');
    this.emailid=localStorage.getItem('emailid');
    this.phoneno=localStorage.getItem('phoneno');
    this.address1=localStorage.getItem('address1');
    this.admno=localStorage.getItem('registration_number');
    this.name=localStorage.getItem('name');
    this.batch_name=localStorage.getItem('batch_name');
    this.classname=localStorage.getItem('classname');
   // this.image= '//192.168.2.4/development/college/neotia/app/webroot/'+localStorage.getItem('image');
   this.image=localStorage.getItem('photo');
    this.address=localStorage.getItem('address');
    this.fathername=localStorage.getItem('fathername');
    this.localimage=localStorage.getItem('image_name');
    this.user_hostel=localStorage.getItem('use_hostel');

    this.blood_group=localStorage.getItem('blood_group');
    this.date_of_admission=localStorage.getItem('date_of_admission');
    
    if(this.user_hostel == 'Y')
    {
      this.bordercolor='solid #BBEDBE 1px';
    }
    else
    {
      this.bordercolor='solid #F4D291 1px';
    }
    console.log('this.user_hostel===>',this.user_hostel);
    console.log('this.fathername===>',this.fathername);
    console.log('11address===>',localStorage.getItem('address'));
    console.log('this.image===>',this.image);
    console.log('batch_name===>',this.batch_name);
    console.log('this.localimage===>',this.localimage);
        
  }

  bigumage(data)
  {
    /*if(this.image_big == 1)
    {
      this.image_big=0;
    }*/

    if(data == 1)
    {
    this.image_big=1;
    }
    if(data == 0)
    {
      this.image_big=0;
    }
  }

}
