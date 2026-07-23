import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachgroupclasslistPageRoutingModule } from './teachgroupclasslist-routing.module';

import { TeachgroupclasslistPage } from './teachgroupclasslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TeachgroupclasslistPageRoutingModule
  ],
  declarations: [TeachgroupclasslistPage]
})
export class TeachgroupclasslistPageModule {}
