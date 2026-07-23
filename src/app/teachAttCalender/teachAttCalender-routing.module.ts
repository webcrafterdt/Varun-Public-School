import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachAttCalenderPage } from './teachAttCalender.page';

const routes: Routes = [
  {
    path: '',
    component: TeachAttCalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachAttCalenderPageRoutingModule {}
