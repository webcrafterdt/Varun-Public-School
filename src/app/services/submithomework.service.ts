import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SubmithomeworkService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  
  submithomework(homework_master_id,homework_trans_id,title,details): Observable<any>
  {

    
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
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
    API_NAME: 'SUBMIT_HOMEWORK'
  },
  REQUEST: {
    "homework_master_id": homework_master_id,
    "student_id": localStorage.getItem('student_master_id'),
    "homework_tran_id": homework_trans_id,
    "title": title,
    "details": details
  }
}



console.log('studycontent ==>',this.POSTDATA);


     return this.http.post(`${environment.baseUrl}api_homework_masters/submit`,this.POSTDATA,httpOptions)

   }
}

