import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherfeesPage } from './teacherfees.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherfeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherfeesPageRoutingModule {}
