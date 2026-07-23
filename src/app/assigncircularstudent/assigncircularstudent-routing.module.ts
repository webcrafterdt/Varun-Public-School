import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssigncircularstudentPage } from './assigncircularstudent.page';

const routes: Routes = [
  {
    path: '',
    component: AssigncircularstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssigncircularstudentPageRoutingModule {}
