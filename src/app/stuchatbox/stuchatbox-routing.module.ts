import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuchatboxPage } from './stuchatbox.page';

const routes: Routes = [
  {
    path: '',
    component: StuchatboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuchatboxPageRoutingModule {}
