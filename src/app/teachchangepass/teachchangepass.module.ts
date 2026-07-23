import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachchangepassPageRoutingModule } from './teachchangepass-routing.module';

import { TeachchangepassPage } from './teachchangepass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachchangepassPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TeachchangepassPage]
})
export class TeachchangepassPageModule {}
