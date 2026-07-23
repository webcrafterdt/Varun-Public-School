import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StafftypePage } from './stafftype.page';

const routes: Routes = [
  {
    path: '',
    component: StafftypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StafftypePageRoutingModule {}
