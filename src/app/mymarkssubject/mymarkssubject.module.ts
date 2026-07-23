import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymarkssubjectPageRoutingModule } from './mymarkssubject-routing.module';

import { MymarkssubjectPage } from './mymarkssubject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MymarkssubjectPageRoutingModule
  ],
  declarations: [MymarkssubjectPage]
})
export class MymarkssubjectPageModule {}
