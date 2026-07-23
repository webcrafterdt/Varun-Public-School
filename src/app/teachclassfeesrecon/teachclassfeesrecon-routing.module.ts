import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachclassfeesreconPage } from './teachclassfeesrecon.page';

const routes: Routes = [
  {
    path: '',
    component: TeachclassfeesreconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachclassfeesreconPageRoutingModule {}
