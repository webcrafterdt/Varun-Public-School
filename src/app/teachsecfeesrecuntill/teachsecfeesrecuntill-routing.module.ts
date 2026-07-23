import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachsecfeesrecuntillPage } from './teachsecfeesrecuntill.page';

const routes: Routes = [
  {
    path: '',
    component: TeachsecfeesrecuntillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachsecfeesrecuntillPageRoutingModule {}
