import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaverespondPage } from './leaverespond.page';

const routes: Routes = [
  {
    path: '',
    component: LeaverespondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaverespondPageRoutingModule {}
