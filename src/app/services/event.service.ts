import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  POSTDATA:any=[];
  
  event_list(): Observable<any>
    {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      



this.POSTDATA=
{
  stuid: localStorage.getItem('studentid')
}

let POSTDATA = new FormData();
POSTDATA.append('stuid' , localStorage.getItem('studentid'));


//console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
//console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
console.log('environment.baseUrl ==>',environment.baseUrl);
console.log('this.POSTDATA ==>',this.POSTDATA);

    return this.http.post(`${environment.baseUrl}event_calender.php`,this.POSTDATA,httpOptions)

   }



/* To Fetch Event List */

  event_list_for_mark_attendance(CalenderDate): Observable<any> {
    let POSTDATA = new FormData();
    POSTDATA.append('eventdate', CalenderDate);
    return this.http.post(`${environment.baseUrl}/teacher_api/event_list_for_attendance.php`, POSTDATA)
  }


  /* To Check Attendance marked On Day */
  markedAttendance(CalenderDate,transid): Observable<any> {
    let POSTDATA = new FormData();
    POSTDATA.append('att_date', CalenderDate);
    POSTDATA.append('transid', transid);
    return this.http.post(`${environment.baseUrl}/teacher_api/checkAttendanceToMarks.php`, POSTDATA)
  }


  CheckTotalAttendance(CalenderDate,transid): Observable<any> {
    let POSTDATA = new FormData();
    POSTDATA.append('att_date', CalenderDate);
    POSTDATA.append('transid', transid);
    return this.http.post(`${environment.baseUrl}/teacher_api/checkAttendanceCountDayWise.php`, POSTDATA)
  }



}
