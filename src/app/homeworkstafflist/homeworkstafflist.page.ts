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
import { AssignhomeworkService } from 'src/app/services/assignhomework.service';
import { DatePickerModalComponent } from '../biomatricstafflist/date-picker-modal.component';
import { ModalController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Subscription } from 'rxjs';
import { HomeworkviewmodalPage } from '../modals/homeworkviewmodal/homeworkviewmodal.page';


//
@Component({
  selector: 'app-homeworkstafflist',
  templateUrl: './homeworkstafflist.page.html',
  styleUrls: ['./homeworkstafflist.page.scss'],
})
export class HomeworkstafflistPage implements OnInit {
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
  HomeWorkdata:any=[];
  AttendanceDate:any;
  today:any;
  filteredHomework: any[] = [];
  isModalOpen = false;
  isLoading: boolean = true;
  // Add this new property
  originalStudentList: any[] = [];
  ismodalmanuallyclosed=false;
  noRecordFound:any;
  selecteddate:any;
   backButtonSubscription!: Subscription;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public formBuilder: FormBuilder, private feeservice: FeesService,private cdr: ChangeDetectorRef,private modalCtrl: ModalController,private assignhomeworkservice: AssignhomeworkService, public menuCtrl: MenuController, private storage: StorageService, private route: ActivatedRoute, private router: Router, private ionLoaderService: IonLoaderService,
    private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    this.menuCtrl.enable(false);
    
    
    this.TransId = this.route.snapshot.paramMap.get('id');
    console.log('this.TransId--xxx>', this.TransId);

    
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



//    this.assignhomeworkservice.StaffHomeworkAssignedList(result.data,'').subscribe((res) => {
//         console.log('assigned homeworkclasses here -->', res);
//         this.HomeWorkdata=res;
//         console.log('this.HomeWorkdata = -->', this.HomeWorkdata);
//         this.ionLoaderService.dismissLoader();
//       });


//     }
//   });
//   return await modal.present();
// }
// ionViewDidEnter() {
//     // hardware back button handle
//     this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
//       if (this.isModalOpen) {
//         this.isModalOpen = false; // close modal
//       } 
//       // else {
//       //   navigator['app'].exitApp(); // ya phir default navigation
//       // }
//     });
//   }

//  ionViewWillLeave() {
//     this.backButtonSubscription.unsubscribe();
//   }

//   ngOnDestroy() {
//     if (this.backButtonSubscription) {
//       this.backButtonSubscription.unsubscribe();
//     }
//    }

async openCalendar() {
  //this.isLoading = true;
  const modal = await this.modalCtrl.create({
    component: DatePickerModalComponent,
    cssClass: 'calendar-modal',
      breakpoints: [0, 0.6],
      initialBreakpoint: 0.6,
     // breakpoints: [0, 1],
      //initialBreakpoint: 1,
    backdropDismiss: true
  });

  modal.onDidDismiss().then(result => {
    if (result.data) {
      const dateObj = new Date(result.data);
      const formattedDate = dateObj.toLocaleDateString('en-GB');
      this.AttendanceDate = formattedDate;


       const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = dateObj.getDate().toString().padStart(2, '0');

    const formattedDated = `${year}-${month}-${day}`;
    this.selecteddate=formattedDated;

      console.log("formattedDate--->",formattedDate);
      console.log("this.selecteddate--->",this.selecteddate);

      this.assignhomeworkservice.StaffHomeworkAssignedList(result.data, '')
        .subscribe((res) => {
          this.HomeWorkdata = res || [];
          this.isLoading = false;
          this.cdr.detectChanges(); // 🔹 force update View/No Homework text
        });


        this.feeservice.homework_staff_list(this.TransId,this.selecteddate).subscribe((res) => {
          console.log('employee List details==>', res);
          
          // This list is what you see on the screen.
          this.employeelist = res; 
          
          // This is the correct step: save a copy of the original data.
          this.originalStudentList = [...res]; 
          
          this.studentlistLength = res.length;
          console.log('this.studentlistLength-cc->', this.studentlistLength);
          this.ionLoaderService.dismissLoader();
        });

    }
  });

  return await modal.present();
}


  ngOnInit() {
  this.today = new Date();
  this.ionLoaderService.autoLoader();

  this.feeservice.homework_staff_list(this.TransId,this.selecteddate).subscribe((res) => {
    console.log('employee List details==>', res);
    
    // This list is what you see on the screen.
    this.employeelist = res; 
    
    // This is the correct step: save a copy of the original data.
    this.originalStudentList = [...res]; 
    
    this.studentlistLength = res.length;
    console.log('this.studentlistLength-cc->', this.studentlistLength);
    this.ionLoaderService.dismissLoader();
  });










   this.assignhomeworkservice.StaffHomeworkAssignedList(this.dateParts_to,'').subscribe((res) => {
        console.log('assigned homeworkclasses here -->', res);
        this.HomeWorkdata=res;
        this.isLoading = false;
        console.log('this.HomeWorkdata = -->', this.HomeWorkdata);
        this.ionLoaderService.dismissLoader();
      });





    this.ionLoaderService.dismissLoader();

    console.log('this.first_name-cc->', localStorage.getItem('first_name'));
    console.log('this.imgpath-->', this.imgpath);
    console.log('this.user_hostel-->', this.user_hostel);


  }
  opefile(filename)
  {
      Browser.open({url: filename})
  }


  

  filterStudents(event: any) {
  const searchTerm = event.target.value?.toLowerCase() || '';
  
  if (!searchTerm.trim()) {
    this.employeelist = [...this.originalStudentList]; // Reset list if empty
  } else {
    this.employeelist = this.originalStudentList.filter(stu =>
      stu.staff_name?.toLowerCase().includes(searchTerm)
    );
  }
  console.log("employeelist---->",this.employeelist);
  this.noRecordFound = this.employeelist.length === 0;
}


// filterStudents(event: any) {
//   const searchTerm = event.target.value?.toLowerCase() || '';

//   if (!searchTerm.trim()) {
//     // अगर सर्च टर्म खाली है, तो employeelist को ओरिजिनल लिस्ट से रिसेट करें
//     this.employeelist = [...this.originalStudentList]; 
//   } else {
//     // ओरिजिनल लिस्ट पर फ़िल्टर करें
//     this.employeelist = this.originalStudentList.filter(stu =>
//       stu.staff_name?.toLowerCase().includes(searchTerm)
//     );
//   }
// }
//
// filterStudents(event: any) {
//   const searchTerm = (event.detail.value || '').toLowerCase();  // yaha se value lena hai
//   if (!searchTerm.trim()) {
//     this.employeelist = [...this.studentlist];   // reset if empty
//   } else {
//     this.employeelist = this.studentlist.filter(stu =>
//       stu.staff_name?.toLowerCase().includes(searchTerm)
//     );
//   }
// }



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
  // homeworkdetailscalender(id) {
  //   console.log("Stu id====>", id);
  //   this.router.navigate(["/homeworkstaffcalender", id,'']);

  // }

//ye maine this.isModalOpen= false kar diya but kar diya but modal close nahi ho raha hai
async ionViewWillLeave() {
  this.isModalOpen= false;
  this.ismodalmanuallyclosed=false;
  const topModal = await this.modalCtrl.getTop();
  if (topModal) {
    // Correctly dismiss the modal
    await topModal.dismiss();
  }
  // Unsubscribe the back button listener
  if (this.backButtonSubscription) {
    this.backButtonSubscription.unsubscribe();
  }
}
homeworkdetailscalender(tid: string) {
  this.filteredHomework = this.HomeWorkdata.filter(hw => hw.tid === tid);
  console.log("this.filteredHomework ---->",this.filteredHomework);
  if (this.filteredHomework.length > 0) {
    this.ismodalmanuallyclosed =true;
   // this.isModalOpen = true; // Modal open hoga sirf agar data hai
    this.HomeWorkViewModal(this.filteredHomework);
    
  } else {
    // Agar modal open na karna ho aur sirf message dikhana ho
    // this.isModalOpen = false;
    alert('No homework available for this staff'); 
  }
}



async HomeWorkViewModal(filteredHomework) {
  console.log("afterhomeeee->",filteredHomework);
  //this.isLoading = true;
  const modal = await this.modalCtrl.create({
    component: HomeworkviewmodalPage,
    cssClass: 'half-screen-modal',
    breakpoints: [0, 0.5, 0.8, 1],
    initialBreakpoint: 0.8,
    backdropDismiss: true,
    componentProps: {   // 🔹 yaha data pass hoga
      homework: filteredHomework
    }
  });

  // modal.onDidDismiss().then(result => {
  //   if (result.data) {
  //     const dateObj = new Date(result.data);
  //     const formattedDate = dateObj.toLocaleDateString('en-GB');
  //     this.AttendanceDate = formattedDate;

  //     this.assignhomeworkservice.StaffHomeworkAssignedList(result.data, '')
  //       .subscribe((res) => {
  //         this.HomeWorkdata = res || [];
  //         this.isLoading = false;
  //         this.cdr.detectChanges(); // 🔹 force update View/No Homework text
  //       });
  //   }
  // });

  return await modal.present();
}


// hasHomework(tid: string): boolean {
//   this.isLoading = false;
//   return this.HomeWorkdata.some(hw => hw.tid === tid);
// }


hasHomework(tid: string): boolean {
  this.isLoading = false;
  // Add a check to ensure this.HomeWorkdata is not null or undefined
  if (!this.HomeWorkdata) {
    return false;
  }
  return this.HomeWorkdata.some(hw => hw.tid === tid);
}



  // homeworkdetailscalender(tid: string) {
  //   this.filteredHomework = this.HomeWorkdata.filter(hw => hw.tid === tid);
  //   console.log("In Model Data -->",this.filteredHomework);
  //   this.isModalOpen = true;
  // }
  
decodeHtml(html: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  let decoded = txt.value;
  // Remove wrapping <p> tags
  decoded = decoded.replace(/^<p>/i, '').replace(/<\/p>$/i, '');
  return decoded;
}


  logout(page) {
    // this.navCtrl.setRoot(page);
    localStorage.clear();
    //Preferences.remove({ key: 'sid' });

    // this.router.navigate(["/login"]);
    this.router.navigate(["/login1"]);
  }

}
