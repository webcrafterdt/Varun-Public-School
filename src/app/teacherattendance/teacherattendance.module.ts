import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherattendancePageRoutingModule } from './teacherattendance-routing.module';

import { TeacherattendancePage } from './teacherattendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherattendancePageRoutingModule
  ],
  declarations: [TeacherattendancePage]
})
export class TeacherattendancePageModule {}
