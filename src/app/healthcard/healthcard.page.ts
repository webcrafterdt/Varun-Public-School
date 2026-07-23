import { Component, OnInit,ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router } from "@angular/router";
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core/components';
import { HealthService } from 'src/app/services/health.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-healthcard',
  templateUrl: './healthcard.page.html',
  styleUrls: ['./healthcard.page.scss'],
})
export class HealthcardPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  name: string;
  healthservices:any=[];
  status:any;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }


  healthdetail()
  {
    this.router.navigate(["/healthcarddetail"]);
  }
  
  momthhealth()
  {
    this.router.navigate(["/healthmonthwise"]);
  }
}
