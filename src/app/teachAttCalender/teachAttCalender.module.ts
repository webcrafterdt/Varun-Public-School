import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachAttCalenderPageRoutingModule } from './teachAttCalender-routing.module';

import { TeachAttCalenderPage } from './teachAttCalender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachAttCalenderPageRoutingModule
    
  ],
  declarations: [TeachAttCalenderPage]
})
export class TeachAttCalenderPageModule {}
