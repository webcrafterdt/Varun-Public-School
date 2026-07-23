import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudycontentPage } from './studycontent.page';

const routes: Routes = [
  {
    path: '',
    component: StudycontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudycontentPageRoutingModule {}
