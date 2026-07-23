import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/services/timetable.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  timetable:any=[];
  error:any;
  datadata:any=[];
  finalarray:any=[];
  finalarray_1:any=[];
  DateTime:any=[];
  constructor(private timetableServiceservice: TimetableService,private router: Router,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
    this.timetableServiceservice.timetable().subscribe((res) =>{
      console.log('jai shreenath ji homework --> ',res);
      this.timetable = res['response']['0']['time_table_final'];
      this.error = res['error'];


      this.datadata=res['response']['0']['time_table_final']['0']['period_by_days'];
      this.DateTime=res['response']['0']['time_table_final'];

          for(let i=0;i<=this.datadata.length;i++)
          {
            //for(let j=0;i<=this.datadata.length;j++)
            
            this.finalarray.push(this.timetable);
            
          }

          console.log('Final Array ==>',this.finalarray);

          
          //console.log('Jai shreenathji baba ki ==>',this.finalarray);
          /*for(let q=0;q<=this.finalarray.length;q++)
          {
            console.log('=====>');
            for(let j=0;j<=this.finalarray[q][j].period_by_days.length;j++)
            {
              
              console.log('111=====>',this.finalarray[q][j].period_by_days);
             

              this.finalarray_1.push({
                Faculty_name : this.finalarray[q][j]['period_by_days'][q].Faculty_name,
                Time : this.finalarray[q][j]['period_by_days'][q].Time,
                Subject :  this.finalarray[q][j]['period_by_days'][q].Subject
             });

            }
          }*/


         // console.log('Jai shreenathji baba ki jai ho ==>',this.finalarray_1);
      
      console.log('this.datadata==>',this.datadata);
      console.log('this.error==>',this.timetable);
      if(res['status'] == true)
      {
      //  this.ionLoaderService.dismissLoader();
      }
      
      
    })
  }

}
