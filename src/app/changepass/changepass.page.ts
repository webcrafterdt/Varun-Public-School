import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangepassService } from 'src/app/services/changepass.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {
  @ViewChild('confirm_password') confirm_password;
  @ViewChild('password') password;
  @ViewChild('old_password') old_password;
  status:any;
  message:any;
  validations_form: FormGroup;
  constructor(private toastservice:ToastService,private fb: FormBuilder,private changepassservice: ChangepassService,private router: Router,private ionLoaderService: IonLoaderService) { 

  this.validations_form =this.fb.group({
    old_password: new FormControl('', Validators.compose([
      Validators.required,
      this.noWhitespaceValidator
    ])),
    confirm_password: new FormControl('', Validators.compose([
      Validators.required,
      this.noWhitespaceValidator,
      Validators.minLength(6)
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      this.noWhitespaceValidator,
      Validators.minLength(6)
    ]))
  });

}

// noWhitespaceValidator(control: FormControl) {
//   const isWhitespace = (control.value || '').trim().length === 0;
//   const isValid = !isWhitespace;
//   return isValid ? null : { 'whitespace': true };
// }
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
    this.ionLoaderService.autoLoader();
    this.changepassservice.change_pass(this.password.value,this.confirm_password.value,this.old_password.value).subscribe((res) =>{
      console.log('Change Password --> ',res);
      this.message=res['Message'];
      if(this.message == 'Password Changed Successfully..!!')
        {
          this.router.navigate(["/home"]);
        }
     
      //this.ionLoaderService.dismissLoader();


      this.toastservice.presentToast(this.message);
      
    });
  }

}
