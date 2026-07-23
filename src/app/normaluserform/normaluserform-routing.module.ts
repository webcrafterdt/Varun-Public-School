import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormaluserformPage } from './normaluserform.page';

const routes: Routes = [
  {
    path: '',
    component: NormaluserformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormaluserformPageRoutingModule {}
