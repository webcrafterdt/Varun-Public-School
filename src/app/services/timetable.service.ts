import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  timetable(): Observable<any>
  {

    
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      



this.POSTDATA=
{
  action: "api",
  page:"student_time_table",
  sid:"5440",
  session:"2022_23",
  college:"gdcol1"
}



//console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
//console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);

    return this.http.post(`${environment.baseUrl}index.php`,this.POSTDATA,httpOptions)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

   }
}
