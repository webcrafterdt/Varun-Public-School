import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcircularnewPage } from './addcircularnew.page';

const routes: Routes = [
  {
    path: '',
    component: AddcircularnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcircularnewPageRoutingModule {}
