import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherfeesPageRoutingModule } from './teacherfees-routing.module';

import { TeacherfeesPage } from './teacherfees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeacherfeesPageRoutingModule
  ],
  declarations: [TeacherfeesPage]
})
export class TeacherfeesPageModule {}
