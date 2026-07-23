import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MymarksexamPage } from './mymarksexam.page';

const routes: Routes = [
  {
    path: '',
    component: MymarksexamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymarksexamPageRoutingModule {}
