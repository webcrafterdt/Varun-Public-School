import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewhomeworkPageRoutingModule } from './newhomework-routing.module';

import { NewhomeworkPage } from './newhomework.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewhomeworkPageRoutingModule
  ],
  declarations: [NewhomeworkPage]
})
export class NewhomeworkPageModule {}
