import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudycontentService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  
  studycontent(): Observable<any>
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
    API_NAME: 'LOGIN'
  },
  REQUEST: {
    "student_master_id": localStorage.getItem('student_master_id'),
    "division_id": localStorage.getItem('division_master_id')
  }
}



console.log('studycontent ==>',this.POSTDATA);


     return this.http.post(`${environment.baseUrl}api_study_contents`,this.POSTDATA,httpOptions)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

   }
}
