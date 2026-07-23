import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeworkviewmodalPage } from './homeworkviewmodal.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkviewmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeworkviewmodalPageRoutingModule {}
