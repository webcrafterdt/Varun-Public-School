import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmithomeworkPageRoutingModule } from './submithomework-routing.module';

import { SubmithomeworkPage } from './submithomework.page';
//import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //QuillModule,
    SubmithomeworkPageRoutingModule
  ],
  declarations: [SubmithomeworkPage]
})
export class SubmithomeworkPageModule {}
