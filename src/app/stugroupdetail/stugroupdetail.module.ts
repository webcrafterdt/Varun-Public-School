import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StugroupdetailPageRoutingModule } from './stugroupdetail-routing.module';

import { StugroupdetailPage } from './stugroupdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StugroupdetailPageRoutingModule
  ],
  declarations: [StugroupdetailPage]
})
export class StugroupdetailPageModule {}
