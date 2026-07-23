import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core/components';
import { FeesService } from 'src/app/services/fees.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { IonModal } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  disableCollegeSegmentButton: boolean = true;

  selectedtab:any;
  feesdetail:any=[];
  showhide:any;
  receiptno:any;
  FeeReceiptUrl:any;
  receipt_url:any;
  paybleamount:any;
  bill_master_ids:any=[];
  checkboxcheck:any;
  concession_id:any;
  concession_amount:any;
  iFineAmount:any;
  adjustable_amount:any;
  dataLoaded:any;
  studentid:any;
  notifications:any=[];
  notificationslength:any;
  apiKey = 'NDgyNmRhNGItOTJlOC00NmM5LWI0OTItNTllMTBlZjkwOWZh';
  constructor(private feeservice: FeesService,private router: Router,private ionLoaderService: IonLoaderService,
    private storage:StorageService,public platform: Platform) {
      this.showhide = false;
      this.paybleamount = 0;
      this.studentid=localStorage.getItem('studentid')
   }
  
   openreceipt(receiptno)
   {
    this.receiptno=receiptno.split('#');
    console.log('this.receiptno===>',this.receiptno[0]);
    this.FeeReceiptUrl= this.receipt_url+this.receiptno[0]+'/N/'+localStorage.getItem('division_master_id')+'/app_url';
    Browser.open({url:this.FeeReceiptUrl});
   }
  








   showhieclg(type)
    {
console.log('type ==>',type);
  //this.showhide = true;
  if(this.showhide == true)
  {
    this.showhide=false
  }
  else
  {
    this.showhide=true;
  }

   }

   ionViewWillEnter() {

  }


  fetchNotifications() {
    this.ionLoaderService.autoLoader();
    this.feeservice.getSentNotifications(this.apiKey).subscribe(
      (response) => {
        console.log('Received notifications:', response);
  
        // Filter notifications based on include_external_user_ids
        this.notifications = response.notifications.filter((notification) => {
          // Check if include_external_user_ids array includes the desired user id
          return (
            notification.include_external_user_ids &&
            notification.include_external_user_ids.includes(localStorage.getItem('studentid'))
          );
          
          
          
        });
        this.notificationslength=this.notifications.length;
        console.log("this.notificationslength:==>", this.notificationslength);
        console.log("Filtered notifications:", this.notifications);
      },
      (error) => {
        console.error('Error fetching notifications:', error);
      }
    );
  }

  ngOnInit() {
    this.fetchNotifications();
 
  }  

 

isChecked() {
  return this.bill_master_ids.length > 0;
}

  segmentChanged(even)
  {
   console.log('valsssssss==>',this.checkboxcheck);

    console.log('console.log ==>',even['detail'].value);
    this.selectedtab=even['detail'].value;


    
  }

}