import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthcarddetailPageRoutingModule } from './healthcarddetail-routing.module';

import { HealthcarddetailPage } from './healthcarddetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthcarddetailPageRoutingModule
  ],
  declarations: [HealthcarddetailPage]
})
export class HealthcarddetailPageModule {}
