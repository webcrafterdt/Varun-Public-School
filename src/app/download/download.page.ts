import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';
//import { FilesystemDirectory } from '@capacitor/core';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { DownloadService } from 'src/app/services/download.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  downloadUrl = '';
  myFiles = [];
  downloadProgress = 0;
  dowloads:any=[];
  detailjso:any=[];
  error:any;
  //pdfUrl = 'https://cors-anywhere.herokuapp.com/https://www.africau.edu/images/default/sample.pdf';
  pdfUrl = 'https://www.africau.edu/images/default/sample.pdf';
  constructor(private downloadservice: DownloadService,private router: Router,private ionLoaderService: IonLoaderService,
    private http: HttpClient) { }



    opendownloadfile(dow_url)
      {console.log("dow_url-->",dow_url);
        //window.open(url, '_system', 'location=yes');
        Browser.open({url: decodeURI(dow_url)})
        Browser.addListener('browserFinished',() =>{
          console.log("browse finished");
          Browser.close();
        })
      }

  ngOnInit() {



   // this.ionLoaderService.simpleLoader();
    
    this.downloadservice.download().subscribe((res) =>{
      console.log('jai shreenath ji lacture results  dowload --> ',res);
      this.dowloads = res['response'];
      this.error = res['error'];
      this.ionLoaderService.dismissLoader();
    })

    
    this.detailjso=[
      [
          [ [" Test "], ["Test title"]  ],
          [ ["File"], [" test File "] ],
          [ ["Subject"], ["concept,totipotency and pluripotency of cell"] ]
          
          
     ],
      [
        [ [" Test "], ["Test title"]  ],
          [ ["File"], [" test File "] ],
          [ ["Subject"], ["concept,totipotency and pluripotency of cell"] ]
   ],
   [
        [ [" Test "], ["Test title"]  ],
          [ ["File"], [" test File "] ],
          [ ["Subject"], ["concept,totipotency and pluripotency of cell"] ]
 ]
   ]
  }


  

private  convertBlobToBase64 = (blob:Blob) => new Promise((resolve,reject)=>{
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = ()  =>
  {
    resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
/*
async presentToast(position: 'top' | 'middle' | 'bottom') {
  const toast = await this.toastController.create({
    message: 'Hello World!',
    duration: 1500,
    position: position
  });
}
      async displayurl(url?) {
        alert('Unable to write file 1');
        this.downloadUrl = url ? url : this.downloadUrl;
        const toast = await this.toastController.create({
          message: Directory.External,
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel'
            }
          ],
        });

        await toast.present();
      }*/
//  downloadFile(url)
//  {
//
//
//
//
//    
//   // alert('Unable to write file 2');
//    console.log("ttttt");

//  //
//    console.log("sdsddsdd xx->",this.downloadUrl);
//    try {
//    this.http.get(this.downloadUrl,{
//      responseType: 'blob',
//      reportProgress: true,
//      observe: 'events'
//    }).subscribe(async  event => {
//      alert(' -->1 ' + event.type);
//      alert('-->2 ' + HttpEventType.DownloadProgress);
//      alert('3--> ' + HttpEventType.Response);
//      if (event.type === HttpEventType.DownloadProgress)
//      {//alert('Unable to write file 3');
//        this.downloadProgress = Math.round((100 * event.loaded)/ event.total);
//      }
//      else if(event.type === HttpEventType.Response)
//      {alert('4 ---->' + event.type);
//        this.downloadProgress =0;
//        alert('4');
//        const name =this.downloadUrl.substring(this.downloadUrl.lastIndexOf('/') +1);
//        const base64 = await this.convertBlobToBase64(event.body) as string;
//        try {
//        const savedFile = await Filesystem.writeFile({
//          path :name,
//          data : base64,
//          directory : Directory.Documents
//        }).then((uri)=>{
//          alert(' 6 -> ' + uri );
///*      this.toastController.create({
//        message: 'saved',
//        duration:10000
//      });*/
//      
//    });
//        /*.then((uri)=>{
//          this.toastController.create({
//            message: +"File Dowload Successfully "+Directory.External,
//            duration:10000
//          });  
//        })*/
//        /*const toast = await this.toastController.create({
//          message: savedFile.uri,
//          duration: 5000,
//          position: 'top'
//        });
//        toast.present();*/
//        //alert('Unable to write file 5');
//        //const path = savedFile.uri
//        //console.log('zxzxzx',path);
//      } catch (error) {
//        alert('-->7');
//        alert('--> 8'+ JSON.stringify(error));
//       // alert('Unable to write file'+ error);
//       console.log('111111error---->',error);
//       console.log('11111error JSON.stringify---->',JSON.stringify(error));
//      }
//      }
//     }, (error) => {
//      console.log("Catch error ",error);
//      alert("Catch error "+JSON.stringify(error));
//    })
//  } catch (error) {
//    console.log('error---->',error);
//    console.log('error JSON.stringify---->',JSON.stringify(error));
//    alert('10 -->'+JSON.stringify(error));
//   // alert('Unable to write file1111'+ error);
//  }
//  }


  downloadFile1()
  {
    alert('Unable to write file 6');
    

//
//        try {
//        const savedFile =  Filesystem.writeFile({
//          path :this.pdfUrl,
//          data : 'I am a line of text',
//          directory : Directory.Documents,
//          recursive: true
//        }).then((uri)=>{
//          alert('Unable to write file 9 this.pdfUrl aauriaaa ggggggg ' +uri );
//        alert('Unable to write file Directory.Documents'+ Directory.Documents);
//        alert('Unable to write file 9 this.pdfUrl --'+this.pdfUrl );
//     
//        })
//  //      const path = savedFile.uri
//    //    console.log('zxzxzx',path);
//      } catch (error) {
//        alert('Unable to write file 10');
//        alert('Unable to write file'+ error);
//      }
    
   
  }
  

  downloadFile2(urlFile: string): void {
    console.log('xcxc');
//    alert("xcxcxcxcxcxcxc");
//    this.http.get(urlFile, {
//        responseType: 'blob',
//        reportProgress: true,
//        observe: 'events'
//    }).subscribe(async (event) => {
//      console.log('aaaaaa');
//        if (event.type === HttpEventType.DownloadProgress) {
//          alert('Unable to write file 9 this.pdfUrl aaaaa' );
//            this.downloadProgress = Math.round((100 * event.loaded) / event.total);
//        } else if (event.type === HttpEventType.Response) {
//          alert('Unable to write file 9 this.pdfUrl aaaaa' );
//            this.downloadProgress = 0;
//         e.substr(urlFile.lastIndexOf('/') + 1);
//            const base64 = await this.convertBlodToBase64(event.body) as string;
//            const savedFile = await Filesystem.writeFile({
//                path: name,
//                data: base64,
//                directory: Directory.Documents,
//                recursive: true
//            }).then((uri)=>{
//              alert(' write success aauriaaa -> '+ uri );
//        });
//        }
//    });
}
convertBlodToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        console.log('convBase64', reader.result);
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
});
}
