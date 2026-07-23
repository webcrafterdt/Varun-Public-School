import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiomatricstafflistPage } from './biomatricstafflist.page';

const routes: Routes = [
  {
    path: '',
    component: BiomatricstafflistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiomatricstafflistPageRoutingModule {}
