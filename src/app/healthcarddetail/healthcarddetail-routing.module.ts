import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthcarddetailPage } from './healthcarddetail.page';

const routes: Routes = [
  {
    path: '',
    component: HealthcarddetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthcarddetailPageRoutingModule {}
