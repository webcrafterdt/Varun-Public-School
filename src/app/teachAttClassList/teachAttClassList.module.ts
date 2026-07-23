import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachAttClassListPageRoutingModule } from './teachAttClassList-routing.module';

import { TeachAttClassListPage } from './teachAttClassList.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachAttClassListPageRoutingModule
  ],
  declarations: [TeachAttClassListPage]
})
export class TeachAttClassListPageModule {}
