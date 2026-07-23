import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranckingPageRoutingModule } from './trancking-routing.module';

import { TranckingPage } from './trancking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranckingPageRoutingModule
  ],
  declarations: [TranckingPage]
})
export class TranckingPageModule {}
