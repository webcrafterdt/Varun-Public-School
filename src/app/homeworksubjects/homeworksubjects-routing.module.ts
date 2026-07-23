import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeworksubjectsPage } from './homeworksubjects.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworksubjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeworksubjectsPageRoutingModule {}
