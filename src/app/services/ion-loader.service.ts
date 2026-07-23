import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  constructor(public loadingController: LoadingController) { }

  simpleLoader() {
   // alert("First");
    this.loadingController.create({
        spinner: 'circles'
    }).then((response) => {
        response.present();

    });
}


simpleLoaderClass() {
  // alert("First");
   this.loadingController.create({
       spinner: 'circles'
   }).then((response) => {
       response.present();

   });
}

// dismissLoader() {

//   this.loadingController.dismiss().then((response) => {
//       console.log('Loader closed!', response);
//   }).catch((err) => {
//  console.log('Error occured : ', err);
//   });
// }

dismissLoader() {
  this.loadingController.dismiss().then(() => {
    console.log('Loader closed!');
  }).catch((err) => {
    console.log('Error occurred: ', err);
  });
}


autoLoader() {
  console.log('Error occured :cxxxx');
  this.loadingController.create({
    duration: 500,
    spinner: 'circles'
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
      console.log('Loader dismissed', response);
    });
  });
}  
}
