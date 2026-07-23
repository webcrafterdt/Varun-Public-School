import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachstufeesreconPage } from './teachstufeesrecon.page';

const routes: Routes = [
  {
    path: '',
    component: TeachstufeesreconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachstufeesreconPageRoutingModule {}
