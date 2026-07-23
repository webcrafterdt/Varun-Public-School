import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  handlerMessage = '';
  constructor(private toastController: ToastController) { }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    await toast.present();
}
}
