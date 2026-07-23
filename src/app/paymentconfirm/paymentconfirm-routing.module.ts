import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentconfirmPage } from './paymentconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentconfirmPageRoutingModule {}
