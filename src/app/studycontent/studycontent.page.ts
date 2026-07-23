import { Component, OnInit,ViewChild } from '@angular/core';

import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core/components';
import { StudycontentService } from 'src/app/services/studycontent.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { IonModal } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
//import { YouTubePlayes } from 'youtube-player';
//import * as PluginsLibrary from 'capacitor-video-player';
//import { evice } from '@capacitor/core';
import { Device } from '@capacitor/device';
//import { CapacitorVideoPlayer } from '@capacitor/video';
import { Platform } from '@ionic/angular';
//import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
//import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-studycontent',
  templateUrl: './studycontent.page.html',
  styleUrls: ['./studycontent.page.scss'],
})
export class StudycontentPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  studycontent:any=[];
  player :any;
  stopped:boolean=true;
  videoId:string="";
  //videoPlayer: any;
  videos:any=[];
  status:any;
  messagge:any;
  constructor(private studycontentservice: StudycontentService,private router: Router,private ionLoaderService: IonLoaderService,
    private storage:StorageService,public platform: Platform) { 
    
     
     
  //videos: Video[];
  this.videos= [
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      subtitle: "By Blender Foundation",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny"
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      subtitle: "By Blender Foundation",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Elephant Dream"
    }
  ];
      
    }

//   this.ionLoaderService.simpleLoader();
    //this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer;

    /*const info =  Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      this._videoPlayer = CapacitorVideoPlayer;
    } else {
      this._videoPlayer = WebVPPlugin.CapacitorVideoPlayer
    }*/
    
     /*const info =  await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
       //this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer
    }*/
        ngOnInit() {
        
       // console.log('Before Video');    
   // this.youtube.openVideo('https://www.youtube.com/watch?v=ZzaPdXTrSb8');
  // Browser.open({ url: 'https://www.youtube.com/watch?v=ZzaPdXTrSb8' });
     //   console.log('After Video');

    this.ionLoaderService.simpleLoader();
       this.studycontentservice.studycontent().subscribe((res) =>{
         console.log('studycontent --> ',res);
         this.studycontent = res['data'];
         this.status = res['status'];
         this.messagge=res['messagge'];
         console.log('this.studycontent==>',this.studycontent);
         if(res['status'] == true)
         {
         
         }
         
           this.ionLoaderService.dismissLoader();
       })
       
     }
     
     //async ngAfterViewInit() {
      
     /* const info = await Device.getInfo();
        if (info.platform === "ios" || info.platform === "android") {
        
        } else {*/
     
      //}
   // }
   //playbutton(url)
    //{
    /*this.videoPlayer.play('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').then(() => {
      console.log('video completed');
      }).catch(err => {
      console.log('error is here for video ==>',err);
      });*/
      
      //this.platform.ready().then(() => {
    //  this.videoPlayer.play('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').then(() => {
     // console.log('video completed');
      //}).catch(err => {
      //  console.log('error is here for video 11==>',err);
     // });
   // });
 //  }
     /*async play(url: string) {
      
      document.addEventListener('jeepCapVideoPlayerPlay', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail) }, false);
      document.addEventListener('jeepCapVideoPlayerPause', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail) }, false);
      document.addEventListener('jeepCapVideoPlayerEnded', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail) }, false);
      console.log("xcxcxaaaaacxcxc");
      try {
    //  const res: any = await this.videoPlayer.initPlayer({ mode: "fullscreen",playerId: 'loadid',url: url,componentTag:'app-studycontent' });
      //console.log('resres=>',res);
      }
      catch(error)
      {
        alert('error 1 =>'+error);
        alert('error 2 =>'+error.message);
        
      }
    }*/
/*
play()
{
  if(this.stopped)
  {
    if(this.player == undefined)
    {console.log("shreeji baba ki jai");
      this.player =YouTubePlayes('divid');
    }
    
    this.player.loadVideoById(this.videoId).then(()=>{
      this.player.playVideo();
      this.stopped =false;
    })
  }
}
stop()
{
  if(!this.stopped)
  {
    this.player.stopVideo().then(()=>{
      this.stopped = true;
    })
  }
}
*/


     contentdetails(id)
{console.log("contentdetails----xx>",id);
localStorage.setItem('contentdetail',id);
  this.router.navigate(["/contentdetail",id]);

}
     confirm() {
      this.modal.dismiss(null, 'cancel');
    }

}
