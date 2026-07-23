import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeworkstaffcalenderPage } from './homeworkstaffcalender.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkstaffcalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeworkstaffcalenderPageRoutingModule {}
