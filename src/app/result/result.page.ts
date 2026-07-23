import { Component, OnInit,ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ResultService } from 'src/app/services/result.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  name: string;
  dummyjso:any=[];
  detailjso:any=[];
  error:any;  
  dummyjso1:any=[];
  response:any=[];
  result_data:any=[];
  constructor(private result: ResultService,private router: Router,private ionLoaderService: IonLoaderService) { }



  selectedYear: string;

selectYear(year: string): void {
  this.selectedYear = year;


}

getSegmentResultByYear(year: string): any[] {
  const item = this.dummyjso.response.find((item) => item.Year === year);
  //console.log('item==>',item);
  this.result_data[0]=item;
  console.log("this.result_data==>",this.result_data);
  return item ? item.segment_result : [];
}

segmentChanged(event: any) {
  // Get the selected segment value
  const selectedValue = event.detail.value;

  
  console.log('Selected segment value:', selectedValue);
  this.getSegmentResultByYear(selectedValue);
}





ngOnInit() {

//    this.ionLoaderService.simpleLoader();
  
    this.result.result().subscribe((res) =>{
      console.log('libraryservice --> ',res);
      //this.dummyjso = res;
      this.dummyjso = res;
      console.log('this.dummyjso 11->',this.dummyjso);
      this.error = res['error'];
      //this.ionLoaderService.dismissLoader();
    },(error) =>{
      //this.ionLoaderService.dismissLoader();  
      this.error=true;
      this.dummyjso.errorMessage = 'Something Went Wrong';
    })

  
console.log('this.response ==>',this.response);
console.log('this.dummyjso ==>',this.dummyjso);


  }

}
