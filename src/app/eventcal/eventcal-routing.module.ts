import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventcalPage } from './eventcal.page';

const routes: Routes = [
  {
    path: '',
    component: EventcalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventcalPageRoutingModule {}
