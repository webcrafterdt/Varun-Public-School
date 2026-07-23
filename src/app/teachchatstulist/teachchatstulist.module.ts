import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachchatstulistPageRoutingModule } from './teachchatstulist-routing.module';

import { TeachchatstulistPage } from './teachchatstulist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachchatstulistPageRoutingModule
  ],
  declarations: [TeachchatstulistPage]
})
export class TeachchatstulistPageModule {}
