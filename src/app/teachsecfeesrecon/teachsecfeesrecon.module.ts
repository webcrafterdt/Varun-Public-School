import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachsecfeesreconPageRoutingModule } from './teachsecfeesrecon-routing.module';

import { TeachsecfeesreconPage } from './teachsecfeesrecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachsecfeesreconPageRoutingModule
  ],
  declarations: [TeachsecfeesreconPage]
})
export class TeachsecfeesreconPageModule {}
