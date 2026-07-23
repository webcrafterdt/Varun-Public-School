import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpverifyPageRoutingModule } from './otpverify-routing.module';

import { OtpverifyPage } from './otpverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpverifyPageRoutingModule
  ],
  declarations: [OtpverifyPage]
})
export class OtpverifyPageModule {}
