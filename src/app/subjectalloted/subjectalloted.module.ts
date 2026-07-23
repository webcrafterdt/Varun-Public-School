import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectallotedPageRoutingModule } from './subjectalloted-routing.module';

import { SubjectallotedPage } from './subjectalloted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectallotedPageRoutingModule
  ],
  declarations: [SubjectallotedPage]
})
export class SubjectallotedPageModule {}
