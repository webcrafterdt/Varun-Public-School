import { Component, OnInit } from '@angular/core';
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
  selector: 'app-healthcarddetail',
  templateUrl: './healthcarddetail.page.html',
  styleUrls: ['./healthcarddetail.page.scss'],
})
export class HealthcarddetailPage implements OnInit {
  name: string;
  healthservices:any=[];
  status:any;
  headings:any=[];
  health_service:any=[];
  health_service_boject:any=[];
  services_fields:any=[];
  services_fields_data:any=[];
  height:any;
  weight:any;
  blood:any;
  blood_pressure:any;
  fname:any;
  messagge:any;
  constructor(private healthservice: HealthService,private router: Router,private ionLoaderService: IonLoaderService,
    private storage:StorageService) { }

  ngOnInit() {
    this.ionLoaderService.simpleLoader();
    this.fname=localStorage.getItem('first_name');
    
    this.healthservice.health().subscribe((res) =>{
      if(res['status'] == true)
      {
      console.log('jai shreenath ji studycontent --> ',res);
      this.healthservices = res['data'];
      this.headings=Object.keys(this.healthservices);
      console.log('this.healthservices==>',this.healthservices);

      this.height=this.healthservices['Pre Admission Health Checkup']['HEIGHT-WEIGhT'].Height;
      this.weight=this.healthservices['Pre Admission Health Checkup']['HEIGHT-WEIGhT'].Weight;
      this.blood=this.healthservices['Primary Section : Urine']['Chemical Examination :'].Blood;
      //this.blood_pressure=this.healthservices['Primary Section : Urine']['Chemical Examination :'].Blood;
      this.blood_pressure=this.healthservices['Pre Admission Health Checkup']['Cardiovascular System']['Blood Pressure'];
      this.status=res['status'];
      }
      else
      {
        this.status=res['status'];
        this.messagge=res['messagge'];
      }
      this.ionLoaderService.dismissLoader();
    })



    
  }        


  heading(header)
      {
        this.services_fields=[];
        this.services_fields_data=[];
console.log('header==>',header);

this.health_service=this.healthservices[header];
this.health_service_boject=Object.keys(this.healthservices[header]);
console.log('this.health_service_boject==>',this.health_service_boject);
//console.log('this.health_service==>',this.health_service['Alimentary System'].Liver);
console.log('this.health_service==>',this.health_service);

for(let q =0 ; q<this.health_service_boject.length; q++)
{
//console.log('i===>',Object.keys(this.health_service[this.health_service_boject[q]]));
//console.log('vals==>',this.health_service[this.health_service_boject[q]]);
//this.services_fields.push(Object.keys(this.health_service[this.health_service_boject[q]]));


//this.services_fields.push(this.health_service[this.health_service_boject[q]]);
//this.services_fields.push(Object.keys(this.health_service[this.health_service_boject[q]]));
this.services_fields.push(Object.keys(this.health_service[this.health_service_boject[q]]));
this.services_fields_data.push(Object.values(this.health_service[this.health_service_boject[q]]));

//console.log('this.services_fields====>',this.services_fields);
console.log('this.services_fields_data====>',this.services_fields_data);
  }
  console.log('this.services_fields====>',this.services_fields);
    /*    for(let s=0; s<this.services_fields.length;s++)
        {   
            for(let p=0; p<this.services_fields[s].length ; p++)
            {
                this.services_fields_data.push(this.health_service[this.health_service_boject[s].])
            }
            
        }
  */
}
}

