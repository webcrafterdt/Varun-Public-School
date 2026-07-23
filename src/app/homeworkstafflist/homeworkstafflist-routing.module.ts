import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeworkstafflistPage } from './homeworkstafflist.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkstafflistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiomatricstafflistPageRoutingModule {}
