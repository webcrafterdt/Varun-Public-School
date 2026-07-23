import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranckingPage } from './trancking.page';

const routes: Routes = [
  {
    path: '',
    component: TranckingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranckingPageRoutingModule {}
