import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherMarksClassPageRoutingModule } from './teacherMarksClass-routing.module';

import { TeacherMarksClassPage } from './teacherMarksClass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeacherMarksClassPageRoutingModule
  ],
  declarations: [TeacherMarksClassPage]
})
export class TeacherMarksClassPageModule {}
