import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachstufeesreconPageRoutingModule } from './teachstufeesrecon-routing.module';

import { TeachstufeesreconPage } from './teachstufeesrecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachstufeesreconPageRoutingModule
  ],
  declarations: [TeachstufeesreconPage]
})
export class TeachstufeesreconPageModule {}
