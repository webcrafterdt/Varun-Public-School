import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachcircularPage } from './teachcircular.page';

const routes: Routes = [
  {
    path: '',
    component: TeachcircularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachcircularPageRoutingModule {}
