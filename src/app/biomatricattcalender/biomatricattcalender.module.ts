import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiomatricattcalenderPageRoutingModule } from './biomatricattcalender-routing.module';

import { BiomatricattcalenderPage } from './biomatricattcalender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BiomatricattcalenderPageRoutingModule
  ],
  declarations: [BiomatricattcalenderPage]
})
export class BiomatricattcalenderPageModule {}
