import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectallotedPage } from './subjectalloted.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectallotedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectallotedPageRoutingModule {}
