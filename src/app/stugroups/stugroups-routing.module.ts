import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StugroupsPage } from './stugroups.page';

const routes: Routes = [
  {
    path: '',
    component: StugroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StugroupsPageRoutingModule {}
