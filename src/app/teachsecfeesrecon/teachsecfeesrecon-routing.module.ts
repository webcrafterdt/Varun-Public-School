import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachsecfeesreconPage } from './teachsecfeesrecon.page';

const routes: Routes = [
  {
    path: '',
    component: TeachsecfeesreconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachsecfeesreconPageRoutingModule {}
