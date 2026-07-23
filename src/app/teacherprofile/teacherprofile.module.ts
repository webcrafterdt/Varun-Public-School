import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherprofilePageRoutingModule } from './teacherprofile-routing.module';

import { TeacherprofilePage } from './teacherprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherprofilePageRoutingModule
  ],
  declarations: [TeacherprofilePage]
})
export class TeacherprofilePageModule {}
