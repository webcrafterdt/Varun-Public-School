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
  selector: 'app-exammarks',
  templateUrl: './exammarks.page.html',
  styleUrls: ['./exammarks.page.scss'],
})
export class ExammarksPage implements OnInit {
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
  NoBillScheme:any;
  category: any;
  Transactions: any;
  TransactionsLength: any;
  marksdetail:any=[];
  objectKeys = Object.keys;
  constructor(private feeservice: FeesService,private router: Router,private ionLoaderService: IonLoaderService,
    private storage:StorageService,public platform: Platform) {
      this.showhide = false;
      this.paybleamount = 0;
      this.studentid=localStorage.getItem('studentid');
      this.category= 'feedetail';
   }
  
   openreceipt(receiptno)
   {
    this.receiptno=receiptno.split('#');
    console.log('this.receiptno===>',this.receiptno[0]);
    
    //this.FeeReceiptUrl='http://192.168.2.4/development/college/neotia/neotia291222/fees_receives/get_receipt/'+this.receiptno[0]+'/N/'+localStorage.getItem('division_master_id')+'/app_url';
     this.FeeReceiptUrl= this.receipt_url+this.receiptno[0]+'/N/'+localStorage.getItem('division_master_id')+'/app_url';
    //Browser.open({url:'http://192.168.2.4/development/college/neotia/neotia291222/fees_receives/get_receipt/17622/N/11'})
    Browser.open({url:this.FeeReceiptUrl});
   }
  
   paynow()
     {
  // this.router.navigate(["/healthmonthwise"]);

  this.feeservice.fees(this.bill_master_ids).subscribe((res) =>{
      
//  this.ionLoaderService.dismissLoader();
console.log("res====x>",res);
this.concession_id=res['concession_id'];
this.concession_amount=res['concession_amount'];
this.iFineAmount=res['iFineAmount'];
this.adjustable_amount=res['adjustable_amount'];
console.log('this.concession_id==>',this.concession_id);
if(this.concession_id)
{
  this.router.navigate(["/paymentconfirm",{
    id1:this.paybleamount,
    id2:this.bill_master_ids,
    id3:this.concession_id,
    id4:this.concession_amount,
    id5:this.iFineAmount,
    id6:this.adjustable_amount

  }]);
}
else
{
  this.router.navigate(["/paymentconfirm",{
    id1:this.paybleamount,
    id2:this.bill_master_ids,
    id5:this.iFineAmount,
    id6:this.adjustable_amount
  }]);
}


  });


     
   }
   /*allChecked() {
    return this.checkboxList.every(item => item.checked);
   }*/
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

  ngOnInit() {
     this.disableCollegeSegmentButton = false;
    this.paybleamount = 0;
    this.selectedtab='College';

   this.feeservice.ObtainedMarks(this.studentid).subscribe((res) =>{
    this.dataLoaded = true;
   this.marksdetail=res;
   console.log('this.marksdetail here  ==>',this.marksdetail);
 
  this.ionLoaderService.dismissLoader();

 
   });
   this.ionLoaderService.dismissLoader();
   this.dataLoaded=false;
  }  



    
 /* onCheckboxChange1(index, event) {
   // this.paybleamount=0;
    console.log('this.feesdetail[index]==>',this.feesdetail[index]['FeeBillMaster'].id);
    

    if (event.detail.checked) {
        this.paybleamount += +this.feesdetail[index]['FeeBillMaster'].amount;
        this.bill_master_ids.push(this.feesdetail[index]['FeeBillMaster'].id);
    } else {
        this.paybleamount -= this.feesdetail[index]['FeeBillMaster'].amount;
        this.bill_master_ids.splice(this.feesdetail[index]['FeeBillMaster'].id,index);
    }
     console.log("this.paybleamount===>",this.paybleamount);
    console.log("this.bill_master_ids===>",this.bill_master_ids);
}*/

/*isChecked() {
  console.log("=====>",this.feesdetail.some(item => item.checked));
  return this.feesdetail.some(item => item.checked);
}*/


  GetTransactions() {
    this.feeservice.transactions().subscribe((res12) => {
      this.Transactions = res12;
      this.TransactionsLength = this.Transactions.length;

      console.log('this.TransactionsLength 11==>', this.TransactionsLength);
      console.log('this.Transactions 11==>', this.Transactions);

    });
  }

  onlinereceiptopen(id,currentsessid) {
    console.log('id----->xxxx', id);

     //http://192.168.2.4/development/school/vps/fees/ReceiptFrame.php?RecptNo=364&StudentId=70&ScriptName=ShowReceipt.php&ReportTypeClassCode=Y&ExcludeMasterSecure=Y&SessIdFees=4
     Browser.open({url:'http://192.168.2.4/development/school/vps/fees/ReceiptFrame.php?RecptNo='+id+'&StudentId='+this.studentid+'&ScriptName=ShowReceipt.php&ReportTypeClassCode=Y&ExcludeMasterSecure=Y&SessIdFees='+currentsessid+'&FromApp=Y'});
     //this.router.navigate(["/onlinereceipt", id]);

  }

isChecked() {
  return this.bill_master_ids.length > 0;
}
/*  onCheckboxChange(index, event) {
    
     console.log('event==>',event);
  console.log('this.feesdetail[index]==>',this.feesdetail[index]['FeeBillMaster'].id);
  console.log('this.paybleamount 1==>',this.paybleamount);
   //this.paybleamount=0;
  if (event.detail.checked) {
      //this.paybleamount += +this.feesdetail[index]['FeeBillMaster'].amount;/commented
      this.paybleamount += +this.feesdetail[index]['FeeBillMaster'].due_amount;
      this.bill_master_ids.push(this.feesdetail[index]['FeeBillMaster'].id);
      this.checkboxcheck = true;
  } else {
      //this.paybleamount -= this.feesdetail[index]['FeeBillMaster'].amount;//commented
      this.paybleamount -= this.feesdetail[index]['FeeBillMaster'].due_amount;
      let id = this.feesdetail[index]['FeeBillMaster'].id;
      let idx = this.bill_master_ids.indexOf(id);
      this.bill_master_ids.splice(idx, 1);
      console.log('this.bill_master_ids====>',this.bill_master_ids);
      console.log('this.bill_master_ids.lenght====>',this.bill_master_ids.length);
      if(this.bill_master_ids.length == 0)
      {
        this.checkboxcheck = false;
      }
      //this.checkboxcheck =this.bill_master_ids.lenght > 0;
  }
  console.log("this.paybleamount===>",this.paybleamount);
  console.log("this.bill_master_ids===>",this.bill_master_ids);

console.log('this.checkboxcheck',this.checkboxcheck);
  if(this.checkboxcheck == false)
  {
   this.disableCollegeSegmentButton = false;
 } else {
   this.disableCollegeSegmentButton = true;
 }
}
*/

/*
onCheckboxChange(index, event) {
  console.log('this.feesdetail[index]==> ',this.feesdetail[index]['FeeBillMaster'].id);

  if (event.detail.checked) {
      this.paybleamount += +this.feesdetail[index]['FeeBillMaster'].amount;
      this.bill_master_ids.push(this.feesdetail[index]['FeeBillMaster'].id);
      this.isChecked = true;
  } else {
      this.paybleamount -= this.feesdetail[index]['FeeBillMaster'].amount;
      let id = this.feesdetail[index]['FeeBillMaster'].id;
      let idx = this.bill_master_ids.indexOf(id);
      this.bill_master_ids.splice(idx, 1);
      this.isChecked = this.bill_master_ids.length > 0;
  }
  console.log("this.paybleamount===>",this.paybleamount);
  console.log("this.bill_master_ids===>",this.bill_master_ids);
}
*/



  
  segmentChanged(even)
  {
   console.log('valsssssss==>',this.checkboxcheck);
 //  if(this.checkboxcheck == false)
 //  {
    console.log('console.log ==>',even['detail'].value);
    this.selectedtab=even['detail'].value;
  // }



   
    
  }



  
}