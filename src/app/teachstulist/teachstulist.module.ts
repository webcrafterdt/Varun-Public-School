import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachstulistPageRoutingModule } from './teachstulist-routing.module';

import { TeachstulistPage } from './teachstulist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachstulistPageRoutingModule
  ],
  declarations: [TeachstulistPage]
})
export class TeachstulistPageModule {}
