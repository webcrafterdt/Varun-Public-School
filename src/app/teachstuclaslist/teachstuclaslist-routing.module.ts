import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachstuclaslistPage } from './teachstuclaslist.page';

const routes: Routes = [
  {
    path: '',
    component: TeachstuclaslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachstuclaslistPageRoutingModule {}
