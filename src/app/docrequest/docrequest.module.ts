import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocrequestPageRoutingModule } from './docrequest-routing.module';

import { DocrequestPage } from './docrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DocrequestPageRoutingModule
  ],
  declarations: [DocrequestPage]
})
export class DocrequestPageModule {}
