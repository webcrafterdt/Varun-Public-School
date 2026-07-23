import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentdetailPageRoutingModule } from './contentdetail-routing.module';

import { ContentdetailPage } from './contentdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentdetailPageRoutingModule
  ],
  declarations: [ContentdetailPage]
})
export class ContentdetailPageModule {}
