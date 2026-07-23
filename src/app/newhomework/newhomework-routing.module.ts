import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewhomeworkPage } from './newhomework.page';

const routes: Routes = [
  {
    path: '',
    component: NewhomeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewhomeworkPageRoutingModule {}
