import { Component, OnInit } from '@angular/core';
import { VaccinationService } from 'src/app/services/vaccination.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.page.html',
  styleUrls: ['./vaccination.page.scss'],
})
export class VaccinationPage implements OnInit {
  status:any;
  message:any;
  vaccinations:any=[];
  constructor(private toast:ToastService,private vaccinationService: VaccinationService,private router: Router,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {

    this.ionLoaderService.simpleLoader();
    this.vaccinationService.vaccination().subscribe((res) =>{
      console.log('vaccination --> ',res);
      this.status = res['status'];
      this.message=res['message'];
      if(res['status'] == true)
      {
   this.vaccinations = res['data'];
      //this.circulars_object = Object.keys(res['data']);
      console.log('this.vaccinations ==>',this.vaccinations);



      console.log('this.message ==>',this.message);
      
      this.status= res.status;
      console.log('this.status====>',this.status);
      }
      
      this.ionLoaderService.dismissLoader();
    });
    //this.ionLoaderService.dismissLoader();
  }

}
