import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExammarksPage } from './exammarks.page';

const routes: Routes = [
  {
    path: '',
    component: ExammarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExammarksPageRoutingModule {}
