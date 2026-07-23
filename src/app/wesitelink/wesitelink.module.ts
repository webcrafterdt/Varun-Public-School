import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WesitelinkPageRoutingModule } from './wesitelink-routing.module';

import { WesitelinkPage } from './wesitelink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WesitelinkPageRoutingModule
  ],
  declarations: [WesitelinkPage]
})
export class WesitelinkPageModule {}
