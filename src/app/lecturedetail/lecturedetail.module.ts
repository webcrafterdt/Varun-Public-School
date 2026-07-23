import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturedetailPageRoutingModule } from './lecturedetail-routing.module';

import { LecturedetailPage } from './lecturedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturedetailPageRoutingModule
  ],
  declarations: [LecturedetailPage]
})
export class LecturedetailPageModule {}
