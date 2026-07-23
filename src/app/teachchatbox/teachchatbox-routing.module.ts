import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachchatboxPage } from './teachchatbox.page';

const routes: Routes = [
  {
    path: '',
    component: TeachchatboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachchatboxPageRoutingModule {}
