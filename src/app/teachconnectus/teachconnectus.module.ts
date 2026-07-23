import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachconnectusPageRoutingModule } from './teachconnectus-routing.module';

import { TeachconnectusPage } from './teachconnectus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachconnectusPageRoutingModule
  ],
  declarations: [TeachconnectusPage]
})
export class TeachconnectusPageModule {}
