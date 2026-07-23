import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudycontentmodalPageRoutingModule } from './studycontentmodal-routing.module';

import { StudycontentmodalPage } from './studycontentmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudycontentmodalPageRoutingModule
  ],
  declarations: [StudycontentmodalPage]
})
export class StudycontentmodalPageModule {}
