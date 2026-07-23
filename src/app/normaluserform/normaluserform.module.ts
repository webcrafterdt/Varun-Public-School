import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormaluserformPageRoutingModule } from './normaluserform-routing.module';

import { NormaluserformPage } from './normaluserform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormaluserformPageRoutingModule
    
  ],
  declarations: [NormaluserformPage]
})
export class NormaluserformPageModule {}
