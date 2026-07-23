import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachstuclaslistPageRoutingModule } from './teachstuclaslist-routing.module';

import { TeachstuclaslistPage } from './teachstuclaslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachstuclaslistPageRoutingModule
  ],
  declarations: [TeachstuclaslistPage]
})
export class TeachstuclaslistPageModule {}
