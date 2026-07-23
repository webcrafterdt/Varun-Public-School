import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeesService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  
  fees(stuid): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      


console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
/*this.POSTDATA=
{
  COMMON_INPUT: {
    REQUEST_TIME_STAMP: 1444838717,
    DEVICE_SIGNATURE: {
      ID: '5dd92df00a90ed065dd92df00a90ed06',
      NAME: 'iPhone 5',
      OS_VERSION: '10.1',
      PLATFORM: 'iOS'
    },
    APP_VERSION: '1.0.1',
    AUTH_KEY: '7c4a8d09ca3762af61e59520943dc987abc654',
    API_NAME: 'GET_FEE_REPORT'
  },
  REQUEST: {
    "student_master_id": localStorage.getItem('student_master_id'),
    "billarray": billarray,
    "program_master_id":localStorage.getItem("program_master_id")
  }
}*/
console.log('stuid ====>',stuid);
console.log('this.POSTDATA 111==>',this.POSTDATA);
let POSTDATA = new FormData();
POSTDATA.append('stuid' , stuid);

     return this.http.post(`${environment.baseUrl}fee_detail.php`,POSTDATA)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

   }





  ObtainedMarks(stuid): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      


console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
console.log('transid ==>',localStorage.getItem('transid'));
let transid =localStorage.getItem('transid');

console.log('stuid ====>',stuid);
console.log('this.POSTDATA 111==>',this.POSTDATA);
let POSTDATA = new FormData();
POSTDATA.append('stu_id' , stuid);
POSTDATA.append('transid' , transid);

     return this.http.post(`${environment.baseUrl}exam_marks.php`,POSTDATA)
   }








   fees_detail(fromdate,todate,classname): Observable<any>
   {
    
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};
       
 
 
 console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
 
 //console.log('stuid ====>',stuid);
 console.log('this.POSTDATA 111==>',this.POSTDATA);
console.log('fromdate ====>',fromdate);
console.log('todate ====>',todate);

 let POSTDATA = new FormData();
 POSTDATA.append('fromdate' , fromdate);
 POSTDATA.append('todate' , todate);
 POSTDATA.append('currentsessionid' , localStorage.getItem('currentsessionid'));
 POSTDATA.append('classname' , classname);
      return this.http.post(`${environment.baseUrl}/teacher_api/Fess_Status.php`,POSTDATA)
     //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
     //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)
 
    }
    
    fees_detail_rec_untill(fromdate,todate,classname): Observable<any>
    {
     
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
        
  
  
  console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
  
  console.log('fromdate ====>',fromdate);
  console.log('todate ====>',todate);

  console.log('this.POSTDATA 111==>',this.POSTDATA);
  let POSTDATA = new FormData();
  POSTDATA.append('fromdate' , fromdate);
  POSTDATA.append('todate' , todate);
  POSTDATA.append('currentsessionid' , localStorage.getItem('currentsessionid'));
  POSTDATA.append('classname' , classname);
       return this.http.post(`${environment.baseUrl}/teacher_api/fees_received_untill.php`,POSTDATA)
      //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
      //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)
  
     }
  
     fees_detail_rec_on(fromdate,todate,classname): Observable<any>
    {
     
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
        
  
  
  console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
  
  console.log('fromdate ====>',fromdate);
  console.log('todate ====>',todate);

  console.log('this.POSTDATA 111==>',this.POSTDATA);
  let POSTDATA = new FormData();
  POSTDATA.append('fromdate' , fromdate);
  POSTDATA.append('todate' , todate);
  POSTDATA.append('currentsessionid' , localStorage.getItem('currentsessionid'));
  POSTDATA.append('classname' , classname);
       return this.http.post(`${environment.baseUrl}/teacher_api/fees_received_on.php`,POSTDATA)
      //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
      //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)
  
     }



    fees_bill_detail(stuid): Observable<any>
    {
     
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
  console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
  console.log('this.POSTDATA 111==>',this.POSTDATA);
  let POSTDATA = new FormData();
  
  
  POSTDATA.append('stuid' , stuid);
  
       return this.http.post(`${environment.baseUrl}/teacher_api/due_fees_student_wise.php`,POSTDATA)
      //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
      //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)
  
     }



     studetail(stuid): Observable<any>
     {
      
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json'
         })};
   console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
   console.log('this.POSTDATA 111==>',this.POSTDATA);
   let POSTDATA = new FormData();
   
   
   POSTDATA.append('stuid' , stuid);
   
        return this.http.post(`${environment.baseUrl}/teacher_api/studetail.php`,POSTDATA)
      }

     


    attendance_detail(): Observable<any>
    {
     
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
        
  
  
  console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
  console.log('this.POSTDATA 111==>',this.POSTDATA);
  let POSTDATA = new FormData();
  
  POSTDATA.append('currentsessionid' , localStorage.getItem('currentsessionid'));
  console.log('currentsessionid att =>',localStorage.getItem('currentsessionid'));

  
  
       return this.http.post(`${environment.baseUrl}attendance_in_teacher.php`,POSTDATA)
     }

   

     attendance_detail_main_page(dateParts_to): Observable<any>
     {
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json'
         })};
   console.log('student_master_id ==>',localStorage.getItem('student_master_id'));
   console.log('this.POSTDATA 111==>',this.POSTDATA);
   let POSTDATA = new FormData();
   
   POSTDATA.append('currentsessionid' , localStorage.getItem('currentsessionid'));
   console.log('currentsessionid att =>',localStorage.getItem('currentsessionid'));
 



  console.log("dateParts_to ==>",dateParts_to);
  if(dateParts_to == undefined)
  {
    dateParts_to = 'Y';
  }
  else
  {
    dateParts_to = dateParts_to;
  }
   
  POSTDATA.append('att_date' , dateParts_to);
   
   
   console.log("att_date========>",dateParts_to);
        return this.http.post(`${environment.baseUrl}attendance_in_teacher.php`,POSTDATA)
      }
     







      
staff_biomatric_attendance(dateParts_to,tid): Observable<any>
     {
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json'
         })};
   
   let POSTDATA = new FormData();
   
  console.log("dateParts_to ==>",dateParts_to);
  if(dateParts_to == undefined)
  {
    dateParts_to = 'Y';
  }
  else
  {
    dateParts_to = dateParts_to;
  }
   
  POSTDATA.append('attdate' , dateParts_to);
  POSTDATA.append('tid' ,tid);
   
   
   console.log("att_date========>",dateParts_to);
        return this.http.post(`${environment.baseUrl}teacher_api/biomatric_staff_data.php`,POSTDATA)
      }
      




      stulist(transid): Observable<any>
      {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })};

    let POSTDATA = new FormData();
    
//   POSTDATA.append('dummy' ,'1');


   POSTDATA.append('user_id' ,localStorage.getItem('tid'));
   //POSTDATA.append('transid' ,localStorage.getItem('transid'));
   POSTDATA.append('transid' ,transid);
    
         return this.http.post(`${environment.baseUrl}/teacher_api/stulist.php`,POSTDATA)
       }



       
      biomatric_staff_list(StaffType,SelectedDate): Observable<any>
      {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })};

    let POSTDATA = new FormData();
    
//   POSTDATA.append('dummy' ,'1');


   POSTDATA.append('user_id' ,localStorage.getItem('tid'));
   //POSTDATA.append('transid' ,localStorage.getItem('transid'));
   POSTDATA.append('StaffType' ,StaffType);
   POSTDATA.append('SelectedDate' ,SelectedDate);
   
    
         return this.http.post(`${environment.baseUrl}/teacher_api/biomatric_staff_list.php`,POSTDATA)
       }


       homework_staff_list(transid,selecteddate): Observable<any>
      {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })};
    let POSTDATA = new FormData();
    
   POSTDATA.append('user_id' ,localStorage.getItem('tid'));
   //POSTDATA.append('transid' ,localStorage.getItem('transid'));
   POSTDATA.append('transid' ,transid);
   POSTDATA.append('selecteddate' ,selecteddate);
    
         return this.http.post(`${environment.baseUrl}/teacher_api/homework_staff_list.php`,POSTDATA)
       }





       appmenu(): Observable<any>
       {
         const httpOptions = {
           headers: new HttpHeaders({
             'Content-Type':  'application/json'
           })};
 
     let POSTDATA = new FormData();
     
    POSTDATA.append('user_id' ,localStorage.getItem('tid'));
     
          return this.http.post(`${environment.baseUrl}/teacher_api/app_menu_rights.php`,POSTDATA)
        }
      





   online_payment_detail(amount)
   {
    this.POSTDATA=
{
  REQUEST: {
//    "student_master_id": '1'//localStorage.getItem('student_master_id')
      "amount":amount

  }
}
    return this.http.post(`${environment.onlinepaymentUrl}SabPaisaPostPgRequest.php`,this.POSTDATA)
   }


   private apiUrl = 'https://onesignal.com/api/v1/notifications';
   getSentNotifications(apiKey: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${apiKey}`
    });

    //return this.http.get<any>(this.apiUrl + '?limit=10', { headers });
    return this.http.get<any>(this.apiUrl + '?app_id=158d137d-4dec-483e-8db8-fe757d3f8fd3&limit=10', { headers });
    // Adjust the API endpoint URL and parameters based on your requirements
  }



  due_billd(stuid,due_type): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      
console.log('stuid ====>',stuid);
console.log('this.POSTDATA 111==>',this.POSTDATA);
let POSTDATA = new FormData();
POSTDATA.append('stuid' , stuid);
POSTDATA.append('due_type' , due_type);
POSTDATA.append('stu_reg_id' , localStorage.getItem('student_reg_details_id'));



     return this.http.post(`${environment.baseUrl}fee_get_due_bills_new.php`,POSTDATA)
    
  }  

  
  transactions(): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      

let POSTDATA = new FormData();

POSTDATA.append('StudentLoginId' , localStorage.getItem('student_reg_details_id'));

POSTDATA.append('stu_id' , localStorage.getItem('studentid'));

     return this.http.post(`${environment.baseUrl}payment_transactions.php`,POSTDATA)
    
  }  





  transactionsReceipts(transactionid): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      

let POSTDATA = new FormData();

POSTDATA.append('StudentLoginId' , localStorage.getItem('student_reg_details_id'));
POSTDATA.append('payment_id' , transactionid);



     return this.http.post(`${environment.baseUrl}online_payment_receipt.php`,POSTDATA)
    
  }  
  

  GetAmountDetail(BillMasterId,PaymentGateWay,BillCalculation): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      

console.log('this.POSTDATA 111==>',this.POSTDATA);
let POSTDATA = new FormData();
POSTDATA.append('bill_master_id' , JSON.stringify(BillMasterId));
POSTDATA.append('pmt_gtway' , PaymentGateWay);
POSTDATA.append('stu_reg_id' , localStorage.getItem('student_reg_details_id'));
POSTDATA.append('stu_master_id' , localStorage.getItem('studentid'));
POSTDATA.append('payment_type' , 'F');

POSTDATA.append('transid' , localStorage.getItem('transid'));
POSTDATA.append('enroll_no' , localStorage.getItem('registration_number'));


POSTDATA.append('hostel_bill_amt' , JSON.stringify([BillCalculation['hostel_bill_amt']]));
POSTDATA.append('other_bill_amt' , JSON.stringify([BillCalculation['other_bill_amt']]));
POSTDATA.append('bill_fine_amt' , JSON.stringify([BillCalculation['bill_fine_amt']]));
POSTDATA.append('hostel_bill_cons_amt' , JSON.stringify([BillCalculation['hostel_bill_cons_amt']]));
POSTDATA.append('other_bill_cons_amt' , JSON.stringify([BillCalculation['other_bill_cons_amt']]));


console.log('bill_master_id-->',JSON.stringify(BillMasterId));
console.log('bill_master_id-->',JSON.stringify(BillMasterId));
console.log('pmt_gtway-->',PaymentGateWay);
console.log('stu_reg_id-->',localStorage.getItem('student_reg_details_id'));
console.log('stu_master_id-->',localStorage.getItem('studentid'));

     return this.http.post(`${environment.baseUrl}pay_fees_proceed.php`,POSTDATA)
    
  }


  
  ProceedToPayment(due_amount,fine_amount,concession_amount,total_amount,adm_session_id,
    bill_id_list,buyer_address,buyer_city,buyer_country,
    buyer_email,buyer_first_name,buyer_phone,
    buyer_pin_code,buyer_state,cls_acc_type,
    concession_json,enroll_no,fine_json,frm_pmt_confirm,
    payment_type,payopt,student_fee_concession_id,
    student_id,student_type,transid): Observable<any>
  {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      

console.log('this.POSTDATA 111==>',this.POSTDATA);
let POSTDATA = new FormData();

POSTDATA.append('due_amount' , due_amount);
POSTDATA.append('fine_amount' , fine_amount);
POSTDATA.append('concession_amount' , concession_amount);
POSTDATA.append('total_amount' , total_amount);
POSTDATA.append('adm_session_id' , adm_session_id);
POSTDATA.append('bill_id_list' , bill_id_list);
POSTDATA.append('buyer_address' , buyer_address);
POSTDATA.append('buyer_city' , buyer_city);
POSTDATA.append('buyer_country' , buyer_country);
POSTDATA.append('buyer_email' , buyer_email);
POSTDATA.append('buyer_first_name' , buyer_first_name);
POSTDATA.append('buyer_phone' , buyer_phone);
POSTDATA.append('buyer_pin_code' , buyer_pin_code);
POSTDATA.append('buyer_state' , buyer_state);
POSTDATA.append('cls_acc_type' , cls_acc_type);
POSTDATA.append('concession_json' , concession_json);
POSTDATA.append('enroll_no' , enroll_no);
POSTDATA.append('fine_json' , fine_json);
POSTDATA.append('frm_pmt_confirm' , frm_pmt_confirm);
POSTDATA.append('payment_type' , payment_type);
POSTDATA.append('payopt' , payopt);
POSTDATA.append('student_fee_concession_id' , student_fee_concession_id);
POSTDATA.append('student_id' , student_id);
POSTDATA.append('student_type' , student_type);
POSTDATA.append('transid' , transid);




console.log('due_amount==>' , due_amount);
console.log('fine_amount==>' , fine_amount);
console.log('concession_amount==>' , concession_amount);
console.log('total_amount==>' , total_amount);
console.log('adm_session_id==>' , adm_session_id);
console.log('bill_id_list==>' , bill_id_list);
console.log('buyer_address==>' , buyer_address);
console.log('buyer_city==>' , buyer_city);
console.log('buyer_country==>' , buyer_country);
console.log('buyer_email==>' , buyer_email);
console.log('buyer_first_name==>' , buyer_first_name);
console.log('buyer_phone==>' , buyer_phone);
console.log('buyer_pin_code==>' , buyer_pin_code);
console.log('buyer_state==>' , buyer_state);
console.log('cls_acc_type==>' , cls_acc_type);
console.log('concession_json==>' , concession_json);
console.log('enroll_no==>' , enroll_no);
console.log('fine_json==>' , fine_json);
console.log('frm_pmt_confirm==>' , frm_pmt_confirm);
console.log('payment_type==>' , payment_type);
console.log('payopt==>' , payopt);
console.log('student_fee_concession_id==>' , student_fee_concession_id);
console.log('student_id==>' , student_id);
console.log('student_type==>' , student_type);
console.log('transid==>' , transid);

     return this.http.post(`${environment.baseUrl}fee_payment_airpay_confirm.php`,POSTDATA)
    
  }

  
   
}

//http://192.168.2.3/AppProject/IonicApp/Literom/bluebird/api/fee_payment_airpay_confirm.php?due_amount=12260&
//fine_amount=0&concession_amount=0&total_amount=12260.00&bill_id_list=B87yZ6h9KKBykr%2BguD%2BfSFX6vhTDPMHad%2Fo7H%2B8Wy8o2%2FA%3D%3D&cls_acc_type=2
//&payment_type=F&payopt=CD&fine_json=&concession_json=&student_fee_concession_id=0&student_id=Asv5YQ%3D%3D&enroll_no=J%2021%20033&
//transid=5&student_type=N&adm_session_id=0&buyer_email=info%40bluebird.edu.in&buyer_phone=8860686834&buyer_first_name=Aadvika&
//buyer_last_name=Saraswat&buyer_address=8%2F156%20MITRA%20NAGAR%20ALIGARH&buyer_city=Aligarh&buyer_state=Uttar%20Pradesh&
//buyer_pin_code=&buyer_country=India&frm_pmt_confirm=fee_payment_airpay_confirm.php&student_reg_detail_id=1