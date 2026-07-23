import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocuploadingPage } from './docuploading.page';

const routes: Routes = [
  {
    path: '',
    component: DocuploadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocuploadingPageRoutingModule {}
