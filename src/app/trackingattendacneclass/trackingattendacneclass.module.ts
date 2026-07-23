import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackingattendacneclassPageRoutingModule } from './trackingattendacneclass-routing.module';

import { TrackingattendacneclassPage } from './trackingattendacneclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TrackingattendacneclassPageRoutingModule
  ],
  declarations: [TrackingattendacneclassPage]
})
export class TrackingattendacneclassPageModule {}
