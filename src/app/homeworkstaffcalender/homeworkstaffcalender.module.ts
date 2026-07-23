import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeworkstaffcalenderPageRoutingModule } from './homeworkstaffcalender-routing.module';

import { HomeworkstaffcalenderPage } from './homeworkstaffcalender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomeworkstaffcalenderPageRoutingModule
  ],
  declarations: [HomeworkstaffcalenderPage]
})
export class HomeworkstaffcalenderPageModule {}
