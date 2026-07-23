import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackingattendancecalPageRoutingModule } from './trackingattendancecal-routing.module';

import { TrackingattendancecalPage } from './trackingattendancecal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TrackingattendancecalPageRoutingModule
    
  ],
  declarations: [TrackingattendancecalPage]
})
export class TrackingattendancecalPageModule {}
