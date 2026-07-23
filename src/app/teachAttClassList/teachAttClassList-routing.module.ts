import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachAttClassListPage } from './teachAttClassList.page';

const routes: Routes = [
  {
    path: '',
    component: TeachAttClassListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachAttClassListPageRoutingModule {}
