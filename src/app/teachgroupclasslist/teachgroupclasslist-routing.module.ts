import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachgroupclasslistPage } from './teachgroupclasslist.page';

const routes: Routes = [
  {
    path: '',
    component: TeachgroupclasslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachgroupclasslistPageRoutingModule {}
