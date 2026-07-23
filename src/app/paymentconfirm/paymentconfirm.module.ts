import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentconfirmPageRoutingModule } from './paymentconfirm-routing.module';

import { PaymentconfirmPage } from './paymentconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentconfirmPageRoutingModule
  ],
  declarations: [PaymentconfirmPage]
})
export class PaymentconfirmPageModule {}
