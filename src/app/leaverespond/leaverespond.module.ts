import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaverespondPageRoutingModule } from './leaverespond-routing.module';

import { LeaverespondPage } from './leaverespond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LeaverespondPageRoutingModule
  ],
  declarations: [LeaverespondPage]
})
export class LeaverespondPageModule {}
