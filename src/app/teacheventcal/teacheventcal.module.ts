import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacheventcalPageRoutingModule } from './teacheventcal-routing.module';

import { TeacheventcalPage } from './teacheventcal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacheventcalPageRoutingModule
  ],
  declarations: [TeacheventcalPage]
})
export class TeacheventcalPageModule {}
