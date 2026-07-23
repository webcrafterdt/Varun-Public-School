import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssigncircularteacherPage } from './assigncircularteacher.page';

const routes: Routes = [
  {
    path: '',
    component: AssigncircularteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssigncircularteacherPageRoutingModule {}
