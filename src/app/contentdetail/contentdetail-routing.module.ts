import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentdetailPage } from './contentdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ContentdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentdetailPageRoutingModule {}
