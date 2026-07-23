import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturedetailPage } from './lecturedetail.page';

const routes: Routes = [
  {
    path: '',
    component: LecturedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturedetailPageRoutingModule {}
