import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachchatstulistPage } from './teachchatstulist.page';

const routes: Routes = [
  {
    path: '',
    component: TeachchatstulistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachchatstulistPageRoutingModule {}
