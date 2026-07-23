import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcircularnewPageRoutingModule } from './addcircularnew-routing.module';

import { AddcircularnewPage } from './addcircularnew.page';
//import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    //QuillModule,
    AddcircularnewPageRoutingModule
  ],
  declarations: [AddcircularnewPage]
})
export class AddcircularnewPageModule {}
