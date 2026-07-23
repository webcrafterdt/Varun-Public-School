import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachsecfeesPage } from './teachsecfees.page';

const routes: Routes = [
  {
    path: '',
    component: TeachsecfeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachsecfeesPageRoutingModule {}
