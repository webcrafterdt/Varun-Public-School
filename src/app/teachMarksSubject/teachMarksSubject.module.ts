import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachMarksSubjectPageRoutingModule } from './teachMarksSubject-routing.module';

import { TeachMarksSubjectPage } from './teachMarksSubject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachMarksSubjectPageRoutingModule
  ],
  declarations: [TeachMarksSubjectPage]
})
export class TeachMarksSubjectPageModule {}
