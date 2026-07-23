import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachMarksExamPageRoutingModule } from './teachMarksExam-routing.module';

import { TeachMarksExamPage } from './teachMarksExam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachMarksExamPageRoutingModule
  ],
  declarations: [TeachMarksExamPage]
})
export class TeachMarksExamPageModule {}
