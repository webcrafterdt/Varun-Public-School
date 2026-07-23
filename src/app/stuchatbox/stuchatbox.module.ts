import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuchatboxPageRoutingModule } from './stuchatbox-routing.module';

import { StuchatboxPage } from './stuchatbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StuchatboxPageRoutingModule
  ],
  declarations: [StuchatboxPage]
})
export class StuchatboxPageModule {}
 