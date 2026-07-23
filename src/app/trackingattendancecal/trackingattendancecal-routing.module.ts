import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingattendancecalPage } from './trackingattendancecal.page';

const routes: Routes = [
  {
    path: '',
    component: TrackingattendancecalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingattendancecalPageRoutingModule {}
