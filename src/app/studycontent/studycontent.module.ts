import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudycontentPageRoutingModule } from './studycontent-routing.module';

import { StudycontentPage } from './studycontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudycontentPageRoutingModule
  ],
  declarations: [StudycontentPage]
})
export class StudycontentPageModule {}
