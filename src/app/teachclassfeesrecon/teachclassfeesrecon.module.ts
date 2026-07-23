import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachclassfeesreconPageRoutingModule } from './teachclassfeesrecon-routing.module';

import { TeachclassfeesreconPage } from './teachclassfeesrecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachclassfeesreconPageRoutingModule
  ],
  declarations: [TeachclassfeesreconPage]
})
export class TeachclassfeesreconPageModule {}
