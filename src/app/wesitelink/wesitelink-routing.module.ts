import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WesitelinkPage } from './wesitelink.page';

const routes: Routes = [
  {
    path: '',
    component: WesitelinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WesitelinkPageRoutingModule {}
