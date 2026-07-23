import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventcalPageRoutingModule } from './eventcal-routing.module';

import { EventcalPage } from './eventcal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventcalPageRoutingModule
  ],
  declarations: [EventcalPage]
})
export class EventcalPageModule {}
