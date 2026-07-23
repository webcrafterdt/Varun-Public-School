import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahatmaformPageRoutingModule } from './mahatmaform-routing.module';

import { MahatmaformPage } from './mahatmaform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahatmaformPageRoutingModule
  ],
  declarations: [MahatmaformPage]
})
export class MahatmaformPageModule {}
