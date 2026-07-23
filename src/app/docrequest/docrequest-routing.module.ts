import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocrequestPage } from './docrequest.page';

const routes: Routes = [
  {
    path: '',
    component: DocrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocrequestPageRoutingModule {}
