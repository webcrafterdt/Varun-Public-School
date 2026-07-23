import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachclassfeesPage } from './teachclassfees.page';

const routes: Routes = [
  {
    path: '',
    component: TeachclassfeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachclassfeesPageRoutingModule {}
