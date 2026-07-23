import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HealthService {
  POSTDATA:any=[];
  dummyjso:any=[];
  
  constructor(private http: HttpClient) { }

  health(): Observable<any>
  {
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};
      



this.POSTDATA=
{
  COMMON_INPUT: {
    REQUEST_TIME_STAMP: 1444838717,
    DEVICE_SIGNATURE: {
      ID: '5dd92df00a90ed065dd92df00a90ed06',
      NAME: 'iPhone 5',
      OS_VERSION: '10.1',
      PLATFORM: 'iOS'
    },
    APP_VERSION: '1.0.1',
    AUTH_KEY: '7c4a8d09ca3762af61e59520943dc987abc654',
    API_NAME: 'GET_HEALTH_REPORT'
  },
  REQUEST: {
   // student_master_id: '911',//localStorage.getItem('student_master_id'),//'1140',
    student_master_id: localStorage.getItem('student_master_id'),
    month_wise : '0'
  }
}

//this.getlocalstoragedata().then (()=>{



console.log('health  Service data--> ',this.POSTDATA);
return this.http.post(`${environment.baseUrl}api_student_health`,this.POSTDATA,httpOptions)
    //return this.dummyjso;

   }



   month_wise_health(): Observable<any>
   {
     
     
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/x-www-form-urlencoded'
       })};
       
 
 
 
 this.POSTDATA=
 {
   COMMON_INPUT: {
     REQUEST_TIME_STAMP: 1444838717,
     DEVICE_SIGNATURE: {
       ID: '5dd92df00a90ed065dd92df00a90ed06',
       NAME: 'iPhone 5',
       OS_VERSION: '10.1',
       PLATFORM: 'iOS'
     },
     APP_VERSION: '1.0.1',
     AUTH_KEY: '7c4a8d09ca3762af61e59520943dc987abc654',
     API_NAME: 'GET_HEALTH_REPORT'
   },
   REQUEST: {
     //student_master_id: '911',//localStorage.getItem('student_master_id'),//'1140',
     student_master_id: localStorage.getItem('student_master_id'),
     month_wise : '1'
   }
 }
 
 //this.getlocalstoragedata().then (()=>{
 
 
 
 console.log('health data--> ',this.POSTDATA);
 return this.http.post(`${environment.baseUrl}api_student_health`,this.POSTDATA,httpOptions)
     //return this.dummyjso;
 
    }
}
  