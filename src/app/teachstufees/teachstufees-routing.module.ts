import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachstufeesPage } from './teachstufees.page';

const routes: Routes = [
  {
    path: '',
    component: TeachstufeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachstufeesPageRoutingModule {}
