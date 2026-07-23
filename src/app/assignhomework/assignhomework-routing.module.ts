import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignhomeworkPage } from './assignhomework.page';

const routes: Routes = [
  {
    path: '',
    component: AssignhomeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignhomeworkPageRoutingModule {}
