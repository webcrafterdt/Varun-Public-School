import { Component, OnInit,ViewChild } from '@angular/core';
import { ChangepassService } from 'src/app/services/changepass.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { AlertController } from '@ionic/angular';
//import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-teachchangepass',
  templateUrl: './teachchangepass.page.html',
  styleUrls: ['./teachchangepass.page.scss'],
})
export class TeachchangepassPage implements OnInit {
  @ViewChild("password") password;
  @ViewChild("confirm_password") confirm_password;
  @ViewChild("old_password") old_password;
  status:any;
  message:any;
  //password:any;
  //confirm_password:any;
  //old_password:any;
  validations_form :FormGroup;
  constructor(private toastservice:ToastService,private fb: FormBuilder,private alert:AlertController,private changepassservice: ChangepassService,private router: Router,private ionLoaderService: IonLoaderService) { 

    // this.form = this.fb.group({
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     this.noWhitespaceValidator
    //   ])
    // });

    this.validations_form = this.fb.group({
      old_password: new FormControl('', Validators.compose([
        Validators.required,/*,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')*/
        this.noWhitespaceValidator
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        this.noWhitespaceValidator
      ])),
      confirm_password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        this.noWhitespaceValidator

        /*,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')*/
      ])),
      
      
      //terms: new FormControl(true, Validators.pattern('true'))
    });

  }

  // noWhitespaceValidator(control: FormControl) {
  //   const isWhitespace = (control.value || '').trim().length === 0;
  //   const isValid = !isWhitespace;
  //   return isValid ? null : { 'whitespace': true };
  // }

  ionViewDidEnter()
  {
    // this.password.value ='';
    // this.confirm_password.value ='';
    // this.old_password.value ='';
  }
  noWhitespaceValidator(control: FormControl) {
    const value = (control.value || '').trim();
    
    const isWhitespace = value.length === 0;
    const isMinLength = value.length >= 6;
    const isValid = !isWhitespace && isMinLength;
    console.log("value.length===>",value.length);
    if (isWhitespace) {
      return { 'whitespace': true };
    } else if (!isMinLength) {
      return { 'minlength': true };
    }
  
    return isValid ? null : { 'whitespace': true, 'minlength': true };
  }
  ngOnInit() {

  }



  change_password()
  {
    console.log('password ==> ',this.password.value);
    console.log('confirm_password ==>',this.confirm_password.value);
    console.log('old_password ==>',this.old_password.value);
    this.ionLoaderService.autoLoader();
    this.changepassservice.teach_change_pass(this.password.value,this.confirm_password.value,this.old_password.value).subscribe(async(res) =>{
      console.log('Change Password --> ',res);
      this.message=res['Message'];
      if(this.message == 'Password Changed Successfully..!!')
        {
        //  this.router.navigate(["/teacherhome"]);
        



        const alertctrl =  await this.alert.create({
          header: 'Confirmation',
          message: 'Do you want Logout..',
          cssClass: 'buttoncsss',
          buttons: [
            {
              text: 'Yes',
              role: 'confirm',
              handler: () => {
                console.log("aggreed here");
                let Selected_Branch = localStorage.getItem("Selected_Branch");
                localStorage.clear();
                //Preferences.remove({ key: 'sid' });
            
                console.log("this.Selected_Branch teacher---->", Selected_Branch);
                // this.router.navigate(["/login"]);
                this.router.navigate(["/login1"]);
              }
            },
            {
              text: 'No',
              role: 'Cancel',
              handler: () => {
                console.log("Cancel Here here");
                this.router.navigate(["/teacherhome"]);
              }
            }
          ]
        });
            alertctrl.present();
          }
      //this.ionLoaderService.dismissLoader();


      this.toastservice.presentToast(this.message);
      
    });
  }

}

