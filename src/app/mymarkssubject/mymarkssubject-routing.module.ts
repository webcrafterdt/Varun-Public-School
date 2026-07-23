import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MymarkssubjectPage } from './mymarkssubject.page';

const routes: Routes = [
  {
    path: '',
    component: MymarkssubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymarkssubjectPageRoutingModule {}
