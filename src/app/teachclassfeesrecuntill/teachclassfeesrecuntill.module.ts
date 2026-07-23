import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachclassfeesrecuntillPageRoutingModule } from './teachclassfeesrecuntill-routing.module';

import { TeachclassfeesrecuntillPage } from './teachclassfeesrecuntill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachclassfeesrecuntillPageRoutingModule
  ],
  declarations: [TeachclassfeesrecuntillPage]
})
export class TeachclassfeesrecuntillPageModule {}
