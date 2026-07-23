import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormhomeworkPage } from './formhomework.page';

const routes: Routes = [
  {
    path: '',
    component: FormhomeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormhomeworkPageRoutingModule {}
