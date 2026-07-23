import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthcardPage } from './healthcard.page';

const routes: Routes = [
  {
    path: '',
    component: HealthcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthcardPageRoutingModule {}
