import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachstufeesdetailPage } from './teachstufeesdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TeachstufeesdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachstufeesdetailPageRoutingModule {}
