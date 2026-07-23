import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachclassfeesPageRoutingModule } from './teachclassfees-routing.module';

import { TeachclassfeesPage } from './teachclassfees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachclassfeesPageRoutingModule
  ],
  declarations: [TeachclassfeesPage]
})
export class TeachclassfeesPageModule {}
