import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveapplicationPageRoutingModule } from './leaveapplication-routing.module';

import { LeaveapplicationPage } from './leaveapplication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LeaveapplicationPageRoutingModule
  ],
  declarations: [LeaveapplicationPage]
})
export class LeaveapplicationPageModule {}
