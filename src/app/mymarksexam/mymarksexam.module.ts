import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymarksexamPageRoutingModule } from './mymarksexam-routing.module';

import { MymarksexamPage } from './mymarksexam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MymarksexamPageRoutingModule
  ],
  declarations: [MymarksexamPage]
})
export class MymarksexamPageModule {}
