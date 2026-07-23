import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherhomePageRoutingModule } from './teacherhome-routing.module';

import { TeacherhomePage } from './teacherhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherhomePageRoutingModule
  ],
  declarations: [TeacherhomePage]
})
export class TeacherhomePageModule {}
