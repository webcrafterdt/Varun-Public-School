import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherhomePage } from './teacherhome.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherhomePageRoutingModule {}
