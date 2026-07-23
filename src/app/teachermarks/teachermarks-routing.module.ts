import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachermarksPage } from './teachermarks.page';

const routes: Routes = [
  {
    path: '',
    component: TeachermarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachermarksPageRoutingModule {}
