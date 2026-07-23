import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacheventcalPage } from './teacheventcal.page';

const routes: Routes = [
  {
    path: '',
    component: TeacheventcalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacheventcalPageRoutingModule {}
