import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmithomeworkPage } from './submithomework.page';

const routes: Routes = [
  {
    path: '',
    component: SubmithomeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmithomeworkPageRoutingModule {}
