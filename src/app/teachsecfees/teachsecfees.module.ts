import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachsecfeesPageRoutingModule } from './teachsecfees-routing.module';

import { TeachsecfeesPage } from './teachsecfees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachsecfeesPageRoutingModule
  ],
  declarations: [TeachsecfeesPage]
})
export class TeachsecfeesPageModule {}
