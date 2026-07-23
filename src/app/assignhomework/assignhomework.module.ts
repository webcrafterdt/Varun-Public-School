import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignhomeworkPageRoutingModule } from './assignhomework-routing.module';

import { AssignhomeworkPage } from './assignhomework.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssignhomeworkPageRoutingModule
  ],
  declarations: [AssignhomeworkPage]
})
export class AssignhomeworkPageModule {}
