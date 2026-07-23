import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudycontentdetailPageRoutingModule } from './studycontentdetail-routing.module';

import { StudycontentdetailPage } from './studycontentdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudycontentdetailPageRoutingModule
  ],
  declarations: [StudycontentdetailPage]
})
export class StudycontentdetailPageModule {}
