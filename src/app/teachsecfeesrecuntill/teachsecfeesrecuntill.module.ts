import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachsecfeesrecuntillPageRoutingModule } from './teachsecfeesrecuntill-routing.module';

import { TeachsecfeesrecuntillPage } from './teachsecfeesrecuntill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachsecfeesrecuntillPageRoutingModule
  ],
  declarations: [TeachsecfeesrecuntillPage]
})
export class TeachsecfeesrecuntillPageModule {}
