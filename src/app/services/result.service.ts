import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  POSTDATA:any=[];
  constructor(private http: HttpClient) { }



  result(): Observable<any>
  {
    
 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};
      



this.POSTDATA=
{
        action: 'api',
        page: 'student_result',
        s_id:"73",
        session: "2022_23",
        college: "gdcol1",
        f_id:"1"
}



console.log('shreenath ji jai this.POSTDATA lectures --> ',this.POSTDATA);
    return this.http.post(`https://erp.luckyinstitute.org/api/index.php`,this.POSTDATA,httpOptions)
    //return this.dummyjso;

   }
}
