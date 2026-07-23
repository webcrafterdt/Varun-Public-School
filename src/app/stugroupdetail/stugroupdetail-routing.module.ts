import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StugroupdetailPage } from './stugroupdetail.page';

const routes: Routes = [
  {
    path: '',
    component: StugroupdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StugroupdetailPageRoutingModule {}
