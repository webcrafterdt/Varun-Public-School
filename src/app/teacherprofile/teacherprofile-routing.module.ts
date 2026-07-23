import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherprofilePage } from './teacherprofile.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherprofilePageRoutingModule {}
