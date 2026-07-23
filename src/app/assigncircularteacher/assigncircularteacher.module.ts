import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigncircularteacherPageRoutingModule } from './assigncircularteacher-routing.module';

import { AssigncircularteacherPage } from './assigncircularteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssigncircularteacherPageRoutingModule
  ],
  declarations: [AssigncircularteacherPage]
})
export class AssigncircularteacherPageModule {}
