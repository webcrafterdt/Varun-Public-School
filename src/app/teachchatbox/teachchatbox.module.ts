import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachchatboxPageRoutingModule } from './teachchatbox-routing.module';

import { TeachchatboxPage } from './teachchatbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachchatboxPageRoutingModule
  ],
  declarations: [TeachchatboxPage]
})
export class TeachchatboxPageModule {}
 