import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachconnectusPage } from './teachconnectus.page';

const routes: Routes = [
  {
    path: '',
    component: TeachconnectusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachconnectusPageRoutingModule {}
