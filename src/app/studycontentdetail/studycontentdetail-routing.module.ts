import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudycontentdetailPage } from './studycontentdetail.page';

const routes: Routes = [
  {
    path: '',
    component: StudycontentdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudycontentdetailPageRoutingModule {}
