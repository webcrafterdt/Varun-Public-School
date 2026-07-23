import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StafftypePageRoutingModule } from './stafftype-routing.module';

import { StafftypePage } from './stafftype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StafftypePageRoutingModule
  ],
  declarations: [StafftypePage]
})
export class StafftypePageModule {}
