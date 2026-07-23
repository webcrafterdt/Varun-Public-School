import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachstufeesrecuntillPageRoutingModule } from './teachstufeesrecuntill-routing.module';

import { TeachstufeesrecuntillPage } from './teachstufeesrecuntill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachstufeesrecuntillPageRoutingModule
  ],
  declarations: [TeachstufeesrecuntillPage]
})
export class TeachstufeesrecuntillPageModule {}
