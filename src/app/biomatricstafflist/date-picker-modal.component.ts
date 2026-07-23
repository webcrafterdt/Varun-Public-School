// date-picker-modal.component.ts
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-picker-modal',
  template: `
    <ion-content class="ion-padding">
      <ion-datetime
        presentation="date"
        [min]="min"
        [max]="max"
        (ionChange)="selectDate($event)">
      </ion-datetime>
    </ion-content>
  `
})
export class DatePickerModalComponent {
  // min = '2025-01-01';
  // max = '2025-12-31';

  constructor(private modalCtrl: ModalController) {}

  selectDate(event: any) {
    this.modalCtrl.dismiss(event.detail.value.split('T')[0]);
  }
}

