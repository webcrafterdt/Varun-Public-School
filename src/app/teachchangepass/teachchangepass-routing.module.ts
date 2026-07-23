import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachchangepassPage } from './teachchangepass.page';

const routes: Routes = [
  {
    path: '',
    component: TeachchangepassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachchangepassPageRoutingModule {}
