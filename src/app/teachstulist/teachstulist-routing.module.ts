import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachstulistPage } from './teachstulist.page';

const routes: Routes = [
  {
    path: '',
    component: TeachstulistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachstulistPageRoutingModule {}
