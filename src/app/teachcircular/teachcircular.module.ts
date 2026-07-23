import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachcircularPageRoutingModule } from './teachcircular-routing.module';

import { TeachcircularPage } from './teachcircular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachcircularPageRoutingModule
  ],
  declarations: [TeachcircularPage]
})
export class TeachcircularPageModule {}
