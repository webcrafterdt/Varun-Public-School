import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudycontentmodalPage } from './studycontentmodal.page';

const routes: Routes = [
  {
    path: '',
    component: StudycontentmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudycontentmodalPageRoutingModule {}
