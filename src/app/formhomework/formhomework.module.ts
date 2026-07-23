import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormhomeworkPageRoutingModule } from './formhomework-routing.module';

import { FormhomeworkPage } from './formhomework.page';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    FormhomeworkPageRoutingModule
  ],
  declarations: [FormhomeworkPage]
})
export class FormhomeworkPageModule {}
