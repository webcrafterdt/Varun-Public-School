import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocuploadingPageRoutingModule } from './docuploading-routing.module';

import { DocuploadingPage } from './docuploading.page';
//import { QuillModule } from 'ngx-quill';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //QuillModule,
    DocuploadingPageRoutingModule
  ],
  declarations: [DocuploadingPage]
})
export class DocuploadingPageModule {}
