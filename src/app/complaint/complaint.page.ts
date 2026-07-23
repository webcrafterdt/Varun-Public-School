import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { OverlayEventDetail } from '@ionic/core/components';
import { ComplaintService } from 'src/app/services/complaint.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {

  messages:any=[];
  name: string;
  message ="test this";
  dummyjso:any=[];
  detailjso:any=[];
  error:any;  
  dummyjso1:any=[];
  messages1:any=[];
  constructor(private   camera:Camera,private complaintservice: ComplaintService,private ionLoaderService: IonLoaderService) { }

 
 
  ngOnInit() {

    
    this.complaintservice.complaint().subscribe((res) =>{
      console.log('complain --> ',res);
      //this.dummyjso = res;
      this.messages1 = res['response'];
      this.error = res['error'];
     // this.ionLoaderService.dismissLoader();
    },(error) =>{
     // this.ionLoaderService.dismissLoader();  
      console.log("xcxcxcxcxcxc");
      this.error=true;
      this.messages1.errorMessage = 'Something Went Wrong';
    })
  }


  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
