import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachstufeesPageRoutingModule } from './teachstufees-routing.module';

import { TeachstufeesPage } from './teachstufees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachstufeesPageRoutingModule
  ],
  declarations: [TeachstufeesPage]
})
export class TeachstufeesPageModule {}
