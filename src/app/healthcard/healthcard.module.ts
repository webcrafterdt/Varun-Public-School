import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthcardPageRoutingModule } from './healthcard-routing.module';

import { HealthcardPage } from './healthcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthcardPageRoutingModule
  ],
  declarations: [HealthcardPage]
})
export class HealthcardPageModule {}
