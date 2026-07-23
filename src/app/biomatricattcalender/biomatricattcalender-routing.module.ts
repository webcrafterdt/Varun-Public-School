import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiomatricattcalenderPage } from './biomatricattcalender.page';

const routes: Routes = [
  {
    path: '',
    component: BiomatricattcalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiomatricattcalenderPageRoutingModule {}
