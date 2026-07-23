import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachstufeesrecuntillPage } from './teachstufeesrecuntill.page';

const routes: Routes = [
  {
    path: '',
    component: TeachstufeesrecuntillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachstufeesrecuntillPageRoutingModule {}
