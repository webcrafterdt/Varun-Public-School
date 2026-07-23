import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigncircularstudentPageRoutingModule } from './assigncircularstudent-routing.module';

import { AssigncircularstudentPage } from './assigncircularstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssigncircularstudentPageRoutingModule
  ],
  declarations: [AssigncircularstudentPage]
})
export class AssigncircularstudentPageModule {}
