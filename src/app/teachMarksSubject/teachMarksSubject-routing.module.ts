import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachMarksSubjectPage } from './teachMarksSubject.page';

const routes: Routes = [
  {
    path: '',
    component: TeachMarksSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachMarksSubjectPageRoutingModule {}
