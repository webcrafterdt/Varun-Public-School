import { Component, OnInit,Optional } from '@angular/core';
import { IonModal,ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { HomeworkService } from 'src/app/services/homework.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
import { empty } from 'rxjs';
import { Browser } from '@capacitor/browser';
import { StudycontentmodalPage } from '../modals/studycontentmodal/studycontentmodal.page';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
//import { FileOpener } from '@ionic-native/file-opener/ngx';
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {
  fromdate:any;
  todate:any;
  selectedtab:any;
  homeworks:any=[];
  homeworks_object:any=[];
  SubmitedHomeWorks:any;
  PendingHomeWorks:any;
  Submited_PendingHomeWorks:any;
  messagge:any;
  status:any;
  downloadUrl:any;
  downloadProgress = 0;
  constructor(private homeworkservice: HomeworkService,public http:HttpClient,private router: Router,private ionLoaderService: IonLoaderService,public modalController: ModalController) {
     this.selectedtab='pending';
    console.log("sdsdsdd outer=>",);
   
  }
  
  
  
  opefile(homeworkid)
  {

    console.log('homeworkid ==>',homeworkid);
    this.homeworkservice.homework_download(homeworkid).subscribe((res) =>{
      
      console.log('res-->',res['HomeworkInfo']);
      console.log('HomeworkData 11-->',res['HomeworkInfo']['0'].homework_file);
      
      let finalpath=res['HomeworkInfo']['0'].homework_file_path+'/'+res['HomeworkInfo']['0'].homework_file_name;
      
      console.log('finalpath-->',finalpath);
      console.log('HomeworkData 11-->',res['HomeworkInfo']['0'].homework_file);
     //console.log("finalpath-->",finalpath);
      Browser.open({url: finalpath});
    });
  
   // Browser.open({url: 'http://192.168.2.4/development/college/neotia/app/webroot/upload/student_assignment/'+filename})
    //  Browser.open({url: filename})
  }











  async downloadFile(url)
  {
  //  this.toastservice.presentToast('file downloaded successfully');
  //this.ionLoaderServi0ce.simpleLoader();
    console.log("ttttt",url);
    this.downloadUrl = url ? url : this.downloadUrl;//'https://cors-anywhere.herokuapp.com/'+url;// url ? url : this.downloadUrl;

    const name = this.downloadUrl.substring(this.downloadUrl.lastIndexOf('/') + 1);
    const path = `storage/emulated/0/Documents/${name}`;
     //const fileExists = await this.checkFileExists(path);
    
   //  
     console.log("File Name Here ==>",name);
     console.log("Directory.Documents ==>",Directory.Documents);
     console.log("Directory.path ==>",path);
     
     console.log("name 22====>",name);
     console.log("sdsddsdd xx->",this.downloadUrl);
    try {
    this.http.get(this.downloadUrl,{
      responseType: 'blob',
      reportProgress: true,
      observe: 'events'
    }).subscribe(async  event => {
      //http://192.168.2.4/development/school/vydehi../download/328_search-2.pdf
      if (event.type === HttpEventType.DownloadProgress)
      {//alert('Unable to write file 3');
        this.downloadProgress = Math.round((100 * event.loaded)/ event.total);
      }
        else if(event.type === HttpEventType.Response)
      {//alert('4 ---->' + event.type);
        this.downloadProgress =0;
       // alert('4');
        const name =this.downloadUrl.substring(this.downloadUrl.lastIndexOf('/') +1);
        const base64 = await this.convertBlobToBase64(event.body) as string;
      //  const fileExists = await this.checkFileExists(Directory.Documents+'/'+path);
       
       
        const fileExists1 = await this.checkFileExists(name);
        
        //console.log("fileExists 11====>1",fileExists);
        console.log("fileExists1 22====>2",fileExists1);
        console.log('file pahssss-->',Directory.Documents+path);
        console.log("Directory.External====>",Directory.External);
        
        //directory : Directory.ExternalStorage
       if(fileExists1 == false)
       {
      
          try {


            const folderPath = 'myCustomFolder';

            // Attempt to read the directory to check if it exists
          //   try{
          //     await Filesystem.mkdir({
          //       path: folderPath,
          //       directory: Directory.Documents,
          //       recursive: true,
          //     });
          //     console.log("Successfully created");
          // }
          // catch(error)
          // {
          //   console.log("here is create directory error",error.message )
          // }

          // const savedFile = await Filesystem.writeFile({  
          //   path: `${folderPath}/${name}`,
          //   data: base64,
          //   directory: Directory.External as FilesystemDirectory,
          // });


          try{
        const savedFile = await Filesystem.writeFile({
          path :name,
          //path: `${folderPath}/${name}`,
          data : base64,
          directory : Directory.Documents
          //directory:Directory.External 
        });
       
     
        //.then((uri)=>{
          //this.toastservice.presentToast('file downloaded successfully');
          const path = savedFile.uri;
          console.log('path after dowwwwn',path);
          // get the mimetype of the file
          const mimeType = this.getMimetype(name);
      
          // open the file in the appropriate viewer
          //this.fileopener.open(path, mimeType).then(()=>console.log("file opened successfully")).catch(error =>console.log(error,'error here'));
//              this.fileopener.open(path, mimeType)
//              .then(() => console.log("file opened successfully"))
//              .catch(error => {
//                console.log(error, 'error here');
//                Browser.open({ url: this.downloadUrl });
//              });
        }
          catch(error)
        {
          console.log("herererererer error =>",error.message);
          try{
            const savedFile = await Filesystem.writeFile({
              path :name,
             // path: `${folderPath}/${name}`,
              data : base64,
              //directory : Directory.Documents
              directory:Directory.External 
            });
           
         
            //.then((uri)=>{
              //this.toastservice.presentToast('file downloaded successfully');
              const path = savedFile.uri;
              console.log('path after dowwwwn',path);
              // get the mimetype of the file
              const mimeType = this.getMimetype(name);
          
              // open the file in the appropriate viewer
              //this.fileopener.open(path, mimeType).then(()=>console.log("file opened successfully")).catch(error =>console.log(error,'error here'));
    
//              this.fileopener.open(path, mimeType)
//              .then(() => console.log("file opened successfully"))
//              .catch(error => {
//                console.log(error, 'error here');
//                Browser.open({ url: this.downloadUrl });
//              });
            


            }
            catch(error)
            {Browser.open({url: this.downloadUrl});
              console.log("herererererer error =>",error.message);
              this.ionLoaderService.dismissLoader();
              
            }
        }
      
        
      } catch (error) {
        //alert('-->7');
       // alert('--> 8'+ JSON.stringify(error));
       // alert('Unable to write file'+ error);
       console.log('111111error---->',error);
       console.log('11111error JSON.stringify---->',JSON.stringify(error));
       try{
        const savedFile = await Filesystem.writeFile({
          path :name,
         // path: `${folderPath}/${name}`,
          data : base64,
          //directory : Directory.Documents
          directory:Directory.External 
        });
       
     
        //.then((uri)=>{
          //this.toastservice.presentToast('file downloaded successfully');
          const path = savedFile.uri;
          console.log('path after dowwwwn',path);
          // get the mimetype of the file
          const mimeType = this.getMimetype(name);
      
          // open the file in the appropriate viewer
         // this.fileopener.open(path, mimeType).then(()=>console.log("file opened successfully")).catch(error =>console.log(error,'error here'));
//         this.fileopener.open(path, mimeType)
//         .then(() => console.log("file opened successfully"))
//         .catch(error => {
//           console.log(error, 'error here');
//           Browser.open({ url: this.downloadUrl });
//         });

        }
        catch(error)
        {
          console.log("herererererer error =>",error.message);
          Browser.open({url: this.downloadUrl});
          this.ionLoaderService.dismissLoader();
        }
      }
    }
     else
    {  
      //const name =this.downloadUrl.substring(this.downloadUrl.lastIndexOf('/') +1);
      // const name1 ='https://vydehi.literom.com/download/school.pdf'.substring('https://vydehi.literom.com/download/school.pdf'.lastIndexOf('/') +1);
      // const path1 = `storage/emulated/0/Documents/${name1}`;
      // const mimeType1 = this.getMimetype(name1);
      // console.log('mimeType in after download',mimeType1);
      // console.log('name in after download',name1);
      // console.log('paths in after download',path1);
      // this.fileopener.open(path1, mimeType1).then(()=>console.log("file opened successfully")).catch(error =>console.log(error.message,'error here'));

//This Condition if for if file already exists
      try{
        const savedFile = await Filesystem.writeFile({
          path :name,
         // path: `${folderPath}/${name}`,
          data : base64,
          //directory : Directory.Documents
          directory:Directory.External 
        });
       
     
        //.then((uri)=>{
          //this.toastservice.presentToast('file downloaded successfully');
          const path = savedFile.uri;
          console.log('path after dowwwwn',path);
          // get the mimetype of the file
          const mimeType = this.getMimetype(name);
      
          // open the file in the appropriate viewer
          //this.fileopener.open(path, mimeType).then(()=>console.log("file opened successfully")).catch(error =>console.log(error,'error here'));
//          this.fileopener.open(path, mimeType)
//          .then(() => console.log("file opened successfully"))
//          .catch(error => {
//            console.log(error, 'error here');
//            Browser.open({ url: this.downloadUrl });
//          });
        }
        catch(error)
        {
          console.log("herererererer error =>",error.message);
          this.ionLoaderService.dismissLoader();
          Browser.open({url: this.downloadUrl});
        }
    }
      }
        this.ionLoaderService.dismissLoader();
     }, (error) => {
      console.log("Catch error ",error);
          //alert("Catch error "+JSON.stringify(error));
          this.ionLoaderService.dismissLoader();
    })
  } catch (error) {
    console.log('error---->',error);
    console.log('error JSON.stringify---->',JSON.stringify(error));
    Browser.open({url: this.downloadUrl});
    this.ionLoaderService.dismissLoader();
    //alert('10 -->'+JSON.stringify(error));
   //   alert('Unable to write file1111'+ error);
  }





  }



  async checkFileExists(path) {
    try {
    //  const encodedPath = `storage/emulated/0/Documents/${encodeURIComponent('2_Orientation circular pre-primary & grade 1-2023-24.pdf')}`;
   // const encodedPath = `storage/documents/2_Orientation circular pre-primary & grade 1-2023-24.pdf`;
        const fileStat = await Filesystem.stat({
        path: path,
        directory: Directory.Documents,
      });
          return fileStat ? true : false;
    } catch (error) {
      console.log('.error==>hereeee', error);
      return false;
    }
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
  getMimetype(filename: string): string {
    const extension = filename.split('.').pop();
    switch (extension) {
      case 'pdf':
        return 'application/pdf';
      case 'doc':
      case 'docx':
        return 'application/msword';
      case 'xls':
      case 'xlsx':
        return 'application/vnd.ms-excel';
      default:
        return 'application/octet-stream';
    }
  }


















  submithomework(id,id1,id2)
  {
    //this.router.navigate(["/contentdetail",id]);
    console.log('title ==>',id);
    console.log('id1 ==>',id1);
    console.log('id2 ==>',id2);
    this.router.navigate(["/submithomework",id,id1,id2]);
  }
  
  ngOnInit() {
 //   this.ionLoaderService.simpleLoader();
     
    this.homeworkservice.homework().subscribe((res) =>{
      console.log('homework 11--> ',res);
      this.homeworks=res['HomeworkInfo'];
      this.homeworks_object=Object.keys(res['HomeworkInfo']);
      console.log('this.homeworks_object 11--> ',this.homeworks_object);
      console.log('this.homeworks 11--> ',this.homeworks);
     // this.homeworks = res['data'];
      //this.SubmitedHomeWorks = res['submit_homework'];
    //  this.PendingHomeWorks = res['unsubmit_homework'];
      
     // console.log('this.SubmitedHomeWorks ==> ',this.SubmitedHomeWorks);
      

      
         /* if(res['status'] == true)
      {
        console.log('this.homeworks 11==>',this.homeworks.length);
        this.homeworks_object=Object.keys(res['data']);
        console.log('objects ==>',this.homeworks_object.length)
        console.log('this.homeworks.length==>',this.homeworks.length);
      }*/
      this.ionLoaderService.dismissLoader();
    })
    
  }
  segmentChanged(event) {
    console.log('====>',event['detail'].value);
    this.selectedtab=event['detail'].value;
  }     
  dateChange(value)
  {
console.log('value==>',value);
  }
  
  from_date(fromdate)
  {
    console.log('fromdate==>',fromdate);
    this.fromdate=fromdate;
  }


  to_date(todate)
  {
    console.log('to_date==>',todate);
     this.todate=todate;
  }

  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '.....<span>Read More</span>' :
           string;
  }

  async msgprint(content)
  {
  console.log('content ==>',content);
  

  const modal = await this.modalController.create({
    component: StudycontentmodalPage,
    cssClass: 'my-custom-class',
    componentProps: { value: content }
  });
  return await modal.present();
  }

}
