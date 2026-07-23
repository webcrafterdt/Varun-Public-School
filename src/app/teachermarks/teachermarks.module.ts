import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachermarksPageRoutingModule } from './teachermarks-routing.module';

import { TeachermarksPage } from './teachermarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachermarksPageRoutingModule
  ],
  declarations: [TeachermarksPage]
})
export class TeachermarksPageModule {}
