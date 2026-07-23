import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherattendancePage } from './teacherattendance.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherattendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherattendancePageRoutingModule {}
