import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysubjectclassesPageRoutingModule } from './mysubjectclasses-routing.module';

import { MysubjectclassesPage } from './mysubjectclasses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MysubjectclassesPageRoutingModule
  ],
  declarations: [MysubjectclassesPage]
})
export class MysubjectclassesPageModule {}
