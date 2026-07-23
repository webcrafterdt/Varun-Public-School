import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { FeesService } from 'src/app/services/fees.service';
import { Browser } from '@capacitor/browser';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paymentconfirm',
  templateUrl: './paymentconfirm.page.html',
  styleUrls: ['./paymentconfirm.page.scss'],
})
export class PaymentconfirmPage implements OnInit {
  paymentdetail:any=[];
  clientCode:any;
  data:any;
  post_url:any;
  amount:any;
  bill_master_ids:any;
  batch_section_trans_id:any;
  section_group_master_id:any;
  session_master_id:any;
  student_master_id:any;
  
  first_name:any;
  last_name:any;
  user_id:any;
  registration_number:any;
  emailid:any;
  phoneno:any;
  concession_id:any;
  concession_amount:any;
  fine_amount:any;
  payble_amount:any;
  payble_amount_remove_concession:any;
  add_amount_remove_fine:any;
  payble_amountfine:any;
  adjustable_amount:any;
  pending_concession:any;
  final_payble_amount:any;
  totpayble_amount:any;
  constructor(private navCtrl: NavController,private route: ActivatedRoute,private ionLoaderService: IonLoaderService,public feeservice:FeesService,private http:HttpClient,private router:Router,private inAppBrowser: InAppBrowser) { 
    this.amount=0;
    this.amount =this.route.snapshot.paramMap.get('id1');
    this.bill_master_ids =this.route.snapshot.paramMap.get('id2');
    this.concession_id =this.route.snapshot.paramMap.get('id3');
    this.concession_amount =this.route.snapshot.paramMap.get('id4');

    this.fine_amount =this.route.snapshot.paramMap.get('id5');
    
    
    this.adjustable_amount =this.route.snapshot.paramMap.get('id6');

console.log('this.amount here ==>',this.amount);
console.log('this.adjustable_amount==>',this.adjustable_amount);

     console.log('this.adjustable_amount==>',this.adjustable_amount);
    console.log('this.concession_amount 1111==>',this.concession_amount);


    

    this.amount = parseFloat(this.amount);
    this.concession_amount = parseFloat(this.concession_amount);
    this.fine_amount = parseFloat(this.fine_amount);




    if(isNaN(this.concession_amount)) {
      this.payble_amount_remove_concession=0;
      this.concession_amount=0;
    } else {
      this.payble_amount_remove_concession=this.concession_amount;
    }

     if(isNaN(this.fine_amount)) {
      this.add_amount_remove_fine=0;
    } else {
      this.add_amount_remove_fine=this.fine_amount;
    }

    this.payble_amount=this.amount-this.payble_amount_remove_concession+this.add_amount_remove_fine;
   // this.payble_amount=this.amount-this.concession_amount+this.fine_amount;//main code

    this.payble_amount= parseFloat(this.payble_amount).toFixed(2);
    this.concession_amount= parseFloat(this.concession_amount).toFixed(2);
    this.fine_amount= parseFloat(this.fine_amount).toFixed(2);

    this.adjustable_amount = parseFloat(this.adjustable_amount);


    /*if($iTotalDueAmount>$iTotalPendingConcession)
    {
      $iPendingConcession = $iTotalPendingConcession;
      $iTotalPaybleAmount = $iTotalDueAmount - $iTotalPendingConcession;
    }
    else
    {
      $iPendingConcession = $iTotalDueAmount;
      $iTotalPaybleAmount = 0.00;
    }*/
      
    

    console.log('concession_amount amnt ==>',this.concession_amount);
    console.log('fine_amount amnt ==>',this.fine_amount);
console.log('payble amnt ==>',parseFloat(this.payble_amount));
console.log('payble adjustable_amount ==>',parseFloat(this.adjustable_amount));
    
    if(this.payble_amount>this.adjustable_amount)
    {
      this.pending_concession = parseFloat(this.adjustable_amount);
      this.totpayble_amount = parseFloat(this.payble_amount) - parseFloat(this.adjustable_amount);
    }
    else
    {
      this.pending_concession = this.payble_amount;
      this.totpayble_amount = 0.00;
    }


     

  this.final_payble_amount= parseFloat(this.totpayble_amount) - parseFloat(this.pending_concession)
  console.log('this.final_payble_amount==>',this.final_payble_amount);
  console.log('this.pending_concession==>',this.pending_concession);
  console.log('this.totpayble_amount==>',this.totpayble_amount);
  
console.log('this.pending_concession ==>',this.pending_concession);
    //this.final_paybleamount=this.adjustable_amount
   // this.payble_amountfine=this.payble_amount+this.fine_amount;
    console.log('this.payble_amountfine==>',this.payble_amountfine);
    console.log('this.amount==>',this.amount);
    console.log('this.concession_amount==>',this.concession_amount);
    console.log('this.fine_amount==>',this.fine_amount);
    console.log('this.payble_amount==>',this.payble_amount);
    //366438
    
     console.log('numsssssss=>',parseFloat('368468.78106508875').toFixed(2));
    /*
    this.amount==> 110600
    this.concession_amount==> 131.21893491124
    this.fine_amount==> 258000
    this.payble_amount==> 368468.78106508875
    this.concession_id==> 5


    */
    //this.payble_amount==> 368468.78106508875
    
    
    //10468.78106508875258000
    
    //366438.00    (110600.00 - 2162.00 + 258000.00)

    console.log('this.concession_id==>',this.concession_id);
    

    
    console.log('this.bill_master_ids==>',this.bill_master_ids);

    console.log('batch_section_trans_id==>',localStorage.getItem('batch_section_trans_id'));
    console.log('section_group_master_id==>',localStorage.getItem('section_group_master_id'));
    

    this.batch_section_trans_id=localStorage.getItem('batch_section_trans_id');
    this.section_group_master_id=localStorage.getItem('section_group_master_id');
    this.session_master_id=localStorage.getItem('session_master_id');
    console.log('this.session_master_id==>',localStorage.getItem('session_master_id'));
    this.user_id=localStorage.getItem('user_id');
    this.first_name=localStorage.getItem('first_name');
    this.last_name=localStorage.getItem('last_name');
    this.student_master_id=localStorage.getItem('student_master_id');
    this.registration_number=localStorage.getItem('registration_number');
    this.emailid=localStorage.getItem('emailid');
    this.phoneno=localStorage.getItem('phoneno');
  }

  ngOnInit() {
  //this.ionLoaderService.simpleLoader();
   this.feeservice.online_payment_detail(this.amount).subscribe((res) =>{
   this.paymentdetail=res;
   this.clientCode=res['clientCode'];
   this.data=res['data'];
   this.post_url=res['post_url'];
   console.log('this.paymentdetail==>',this.paymentdetail);
   
   //this.ionLoaderService.dismissLoader();//this error is showing by 
   });
  // this.ionLoaderService.dismissLoader();
  }


  pay_now(post_url, clientCode1, data)
  {
    console.log('post_url==>xx',post_url);
    console.log('data==>',data);
    console.log('clientCode1==>',clientCode1);
console.log('totpayble_amount==>',this.totpayble_amount);
   // const url='http://192.168.2.2/SabPaisa_PostPg_PHP_Version_7/SabPaisaPostPgRequest.php?clientCode='+clientCode1+'&encData='+data;
 //  const url='http://192.168.2.2/SabPaisa_PostPg_PHP_Version_7/SabPaisaPostPgRequest.php?clientCode='+clientCode1+'&amount='+this.totpayble_amount+'&bill_master_id='+this.bill_master_ids
 const url='http://literom.co.in/literom_app_api/neotia/SabPaisaPostPgRequest.php?clientCode='+clientCode1+'&amount='+this.totpayble_amount+'&bill_master_id='+this.bill_master_ids
   +'&batch_section_trans_id='+this.batch_section_trans_id+'&section_group_master_id='+this.section_group_master_id+'&session_master_id='+this.session_master_id+'&student_master_id='+this.student_master_id
   +'&first_name='+this.first_name+'&last_name='+this.last_name+'&registration_number='+this.registration_number+'&registration_number='+this.registration_number
   +'&user_id='+this.user_id+'&email='+this.emailid+'&mobile='+this.phoneno+'&concession_id='+this.concession_id+'&concession_amount='+this.concession_amount+'&program_master_id='+localStorage.getItem['program_master_id']
   +'&fine_amount='+this.fine_amount+'&total_amount='+this.totpayble_amount;
   
   console.log('url====>',url);
    console.log("url====>",url);
    Browser.open({url});
    //this.router.navigate(["/home"]);
    this.navCtrl.navigateRoot('/home');//, { defaultHref: '/login' });
    
  }

  

  pay_now2(post_url,clientCode1,data) {
     const form = document.createElement("form");
    form.method = "post";
    form.action = post_url;

    const encData = document.createElement("input");
    encData.setAttribute("type", "hidden");
    encData.setAttribute("name", "encData");
     encData.setAttribute("value", data);

    const clientCode = document.createElement("input");
    clientCode.setAttribute("type", "hidden");
    clientCode.setAttribute("name", "clientCode");
    clientCode.setAttribute("value", clientCode1);

    form.appendChild(encData);
    form.appendChild(clientCode);

    document.body.appendChild(form);
    form.submit();
  }



  

  
pay_now_4(post_url,clientCode1,data)
{

  const form = `
  <form method="post" action="https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1">
    <input type="hidden" name="encData" value="`+ data +`">
    <input type="hidden" name="clientCode" value="NITE5">
    <input type="submit" value="Submit">
  </form>
`;
console.log('post_url==>',post_url);
console.log('data==>',data);
console.log('clientCode1==>',clientCode1);
/*const form = '<form method="post" action="' + post_url + '" >' +
   	  '<input type="hidden" name="encData" value="' + data + '">' +
  '<input type="hidden" name="clientCode" value="' + clientCode1 + '">' +
  '</form> ';
*/



const browser = this.inAppBrowser.create(form, '_self', 'location=no');

/*browser.on('loadstop').subscribe(event => {
  browser.executeScript({ code: 'document.forms[0].submit();' });
});*/

 
}

  pay_now12(post_url,clientCode1,data) {
    const form = document.createElement("form");
    form.method = "post";
    form.action = post_url;
    // create hidden inputs
    // ...
     const encData = document.createElement("input");
    encData.setAttribute("type", "hidden");
    encData.setAttribute("name", "encData");
    encData.setAttribute("value", data);
    
    const clientCode = document.createElement("input");
    clientCode.setAttribute("type", "hidden");
    clientCode.setAttribute("name", "clientCode");
    clientCode.setAttribute("value", clientCode1);
    form.appendChild(encData);
    form.appendChild(clientCode);

    // create an iframe to target the form
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    form.target = iframe.name;
    document.body.appendChild(iframe);

   // iframe.onload = () => {
      window.onunload = function() {
        alert('alert ==>'+iframe.contentWindow.location.href);
        if (iframe.contentWindow.location.href === "http://192.168.2.2/SabPaisa_PostPg_PHP_Version_7/SabPaisaPostPgResponse.php") {
        // payment was successful, redirect or show success message
        this.router.navigate(["/home"]);
      }// else if (iframe.contentWindow.location.href === "https://example.com/failure") {
        // payment failed, redirect or show failure message
       else {
        this.router.navigate(["/home"]);
      }
    };
    document.body.appendChild(form);
    form.submit();
  }  





  pay_now_latest(post_url, clientCode1, data) {
    const form = document.createElement("form");
    form.method = "post";
    form.action = post_url;
    // create hidden inputs
    // ...
    const encData = document.createElement("input");
    encData.setAttribute("type", "hidden");
    encData.setAttribute("name", "encData");
    encData.setAttribute("value", data);
  
    const clientCode = document.createElement("input");
    clientCode.setAttribute("type", "hidden");
    clientCode.setAttribute("name", "clientCode");
    clientCode.setAttribute("value", clientCode1);
    form.appendChild(encData);
    form.appendChild(clientCode);
  
    // create an iframe to target the form
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    form.target = iframe.name;
    document.body.appendChild(iframe);
  
/*iframe.onload = () => {
  if (iframe.contentWindow.location.href === "http://192.168.2.2/SabPaisa_PostPg_PHP_Version_7/SabPaisaPostPgResponse.php") {
    // payment was successful, redirect to success page
    this.router.navigate(["/home"]);
  } else if (iframe.contentWindow.location.href === "https://example.com/failure") {
    // payment failed, redirect to failure page
    this.router.navigate(["/home"]);
  }
  else {
    this.router.navigate(["/home"]);
  }
};*/


window.addEventListener("message", function(event) {
  if (event.data === "payment-success") {
    // payment was successful, redirect to success page
    //this.router.navigate(["/home"]);
    console.log("xxxx");
  } else if (event.data === "payment-failed") {
    // payment failed, redirect to failure page
    //this.router.navigate(["/home"]);
    console.log("aaaaa");
  }
  else
  {
    console.log("jai shreenath ji");
  }
});
  
    document.body.appendChild(form);
    form.submit();
  }








 async pay_now_5(post_url,clientCode1,data) {

    console.log('post_url==>xx',post_url);
    console.log('data==>',data);
    console.log('clientCode1==>',clientCode1);
    const paymentURL = post_url;//'https://example.com/payment';

  const pageContent = '<form name="redirect" id="redirect" action="' + post_url + '" method="post">' +
	'<input type="hidden" name="encData" value="' + data + '">' +
  '<input type="hidden" name="clientCode" value="' + clientCode1 + '">' +

	'</form> <script type="text/javascript">document.getElementById("redirect").submit();</script>';
    console.log('btoa(formHTML)==>',pageContent);
   // const paymentBrowser = Browser.open({
   //   url: 'data:text/html;base64,' + btoa(formHTML)
  //  });
  const pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);


  const browserRef = await this.inAppBrowser
	.create(
	  pageContentUrl ,
	  '_self',
	  'toolbar=yes,fullscreen=no,hidden=no,location=no,clearsessioncache=yes,clearcache=yes,zoom=no',
    
	);

  console.log('pageContentUrl==>',pageContentUrl);
  }
  
  
  async pay_now11(post_url: string, clientCode1: string, encData: string) {

    console.log('post_url==>',post_url);
    console.log('encData==>',encData);
    console.log('clientCode1==>',clientCode1);
    const formHTML = `
      <form id="payment-form" action="${post_url}" method="post">
        <input type="hidden" name="encData" value="${encData}">
        <input type="hidden" name="clientCode" value="${clientCode1}">
      </form>
      <script>
        document.getElementById('payment-form').submit();
      </script>
    `;
  
    /*const options: InAppBrowserOptions = {
      location: 'no',
      toolbar: 'no'
    };*/
  console.log('formHTML===>',formHTML);
    const browser = await this.inAppBrowser.create(formHTML, '_blank', {location: 'yes'});

  }





  
  /*
  pay_now(post_url,clientCode,data) {
    axios.post(post_url, {
      encData: data,
      clientCode: clientCode
    })
    .then(response => {
      // check the response and redirect to success or failure url
    })
    .catch(error => {
      // show error message
    });
  }*/
  
  pay_now1(post_url,clientCode,data) {



    const paymentUrl = post_url+'?encData='+data+'&clientCode='+clientCode;
    window.location.href = paymentUrl;









    /*const paymentData = {
        encData: data,
        clientCode: clientCode
    };
console.log('post_url ==>',post_url);
    this.http.post(post_url, paymentData).subscribe(
        response => {
            console.log('Payment Successful');
            // Redirect the user to the payment gateway URL
            window.location.href = post_url//response.payment_url;
        },
        error => {
            console.log('Payment Failed');
            // handle error response
        }
    );*/



/*
    const pageContent = '<form name="redirect" id="redirect" action="' + post_url + '" method="post">' +
   	  '<input type="hidden" name="encData" value="' + data + '">' +
  '<input type="hidden" name="clientCode" value="' + clientCode + '">' +
  '</form> <script type="text/javascript">document.getElementById("redirect").submit();</script>';

  const pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);
console.log('pageContentUrl==>',pageContentUrl);
console.log('pageContent==>',btoa(pageContent));
  
Browser.open({url: pageContentUrl});*/

  }

}

