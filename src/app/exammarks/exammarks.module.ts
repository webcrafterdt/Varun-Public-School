import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExammarksPageRoutingModule } from './exammarks-routing.module';

import { ExammarksPage } from './exammarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExammarksPageRoutingModule
  ],
  declarations: [ExammarksPage]
})
export class ExammarksPageModule {}
