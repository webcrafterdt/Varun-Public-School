import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeworksubjectsPageRoutingModule } from './homeworksubjects-routing.module';

import { HomeworksubjectsPage } from './homeworksubjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomeworksubjectsPageRoutingModule
  ],
  declarations: [HomeworksubjectsPage]
})
export class HomeworksubjectsPageModule {}
