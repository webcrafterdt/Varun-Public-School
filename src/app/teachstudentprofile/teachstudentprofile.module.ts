import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachstudentprofilePageRoutingModule } from './teachstudentprofile-routing.module';

import { TeachstudentprofilePage } from './teachstudentprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachstudentprofilePageRoutingModule
  ],
  declarations: [TeachstudentprofilePage]
})
export class TeachstudentprofilePageModule {}
