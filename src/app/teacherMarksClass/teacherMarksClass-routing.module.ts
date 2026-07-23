import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherMarksClassPage } from './teacherMarksClass.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherMarksClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherMarksClassPageRoutingModule {}
