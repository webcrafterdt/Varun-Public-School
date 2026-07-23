import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthmonthwisePage } from './healthmonthwise.page';

const routes: Routes = [
  {
    path: '',
    component: HealthmonthwisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthmonthwisePageRoutingModule {}
