import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveapplicationPage } from './leaveapplication.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveapplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveapplicationPageRoutingModule {}
