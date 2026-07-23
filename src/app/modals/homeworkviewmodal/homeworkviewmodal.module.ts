import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeworkviewmodalPageRoutingModule } from './homeworkviewmodal-routing.module';

import { HomeworkviewmodalPage } from './homeworkviewmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeworkviewmodalPageRoutingModule
  ],
  declarations: [HomeworkviewmodalPage]
})
export class HomeworkviewmodalPageModule {}
