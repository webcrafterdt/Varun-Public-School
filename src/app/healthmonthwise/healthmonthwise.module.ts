import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthmonthwisePageRoutingModule } from './healthmonthwise-routing.module';

import { HealthmonthwisePage } from './healthmonthwise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthmonthwisePageRoutingModule
  ],
  declarations: [HealthmonthwisePage]
})
export class HealthmonthwisePageModule {}
