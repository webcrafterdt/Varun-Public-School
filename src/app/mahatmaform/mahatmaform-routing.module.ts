import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahatmaformPage } from './mahatmaform.page';

const routes: Routes = [
  {
    path: '',
    component: MahatmaformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahatmaformPageRoutingModule {}
