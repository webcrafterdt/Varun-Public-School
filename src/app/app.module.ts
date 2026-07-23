import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
//import { QuillModule } from 'ngx-quill';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Camera } from '@ionic-native/camera/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
//import { FileOpener } from '@ionic-native/file-opener/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  providers: [VideoPlayer,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },YoutubeVideoPlayer,InAppBrowser,Camera,FormBuilder,FormControl],
  bootstrap: [AppComponent],
})
export class AppModule {}



