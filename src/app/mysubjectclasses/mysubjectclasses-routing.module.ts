import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysubjectclassesPage } from './mysubjectclasses.page';

const routes: Routes = [
  {
    path: '',
    component: MysubjectclassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysubjectclassesPageRoutingModule {}
