import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core/components';
import { HealthService } from 'src/app/services/health.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-healthmonthwise',
  templateUrl: './healthmonthwise.page.html',
  styleUrls: ['./healthmonthwise.page.scss'],
})
export class HealthmonthwisePage implements OnInit {
  monthwisehealth:any=[];
  monthwise_boject:any=[];
  status:any;
  messagge:any;
  constructor(private healthservice: HealthService,private router: Router,private ionLoaderService: IonLoaderService,
     private storage:StorageService) { }

  ngOnInit() {
    this.ionLoaderService.simpleLoader();
     this.healthservice.month_wise_health().subscribe((res) =>{
      console.log('month_wise_health --> ',res);

      if(res['status'] == true)
      {
        
      this.monthwisehealth = res['data'];
      this.monthwise_boject= Object.keys(this.monthwisehealth);
      console.log('this.monthwisehealth==>',this.monthwisehealth);
      console.log('this.monthwise_boject==>',this.monthwise_boject);
      this.status=res['status'];
      }
      else
      {
        this.status=res['status'];
        this.messagge=res['messagge'];
      }
      //this.status=res['status'];
      //this.status=res['status'];

      
       this.ionLoaderService.dismissLoader();
    })
  }

}

