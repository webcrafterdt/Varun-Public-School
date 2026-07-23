import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  complaint(): Observable<any>
  {

    
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      



this.POSTDATA=
{
  action: 'api',
  page: 'student_lecture_details',
  session: localStorage.getItem('session'),
  college: localStorage.getItem('college')
}

console.log('post_circular ==>',this.POSTDATA);

    return this.http.post(`${environment.baseUrl1}index.php`,this.POSTDATA,httpOptions)

   }
}
