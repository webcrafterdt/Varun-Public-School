import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StugroupsPageRoutingModule } from './stugroups-routing.module';

import { StugroupsPage } from './stugroups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StugroupsPageRoutingModule
  ],
  declarations: [StugroupsPage]
})
export class StugroupsPageModule {}
 