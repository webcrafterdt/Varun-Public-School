import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiomatricstafflistPageRoutingModule } from './biomatricstafflist-routing.module';

import { BiomatricstafflistPage } from './biomatricstafflist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BiomatricstafflistPageRoutingModule
  ],
  declarations: [BiomatricstafflistPage]
})
export class BiomatricstafflistPageModule {}
