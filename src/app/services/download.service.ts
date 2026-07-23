import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  POSTDATA:any=[];
  dummyjso:any=[];
  session:any;
  f_id:any;
  college:any;
  constructor(private http: HttpClient) { }




  

  download(): Observable<any>
  {
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};
      



this.POSTDATA=
{
        action: 'api',
        page: 'student_download',
        sid: '5440',//localStorage.getItem('sid'),
        session: '2022_23',//localStorage.getItem('session'),
        college: 'gdcol1'//localStorage.getItem('college')
}

//this.getlocalstoragedata().then (()=>{
  console.log("xcxcxcdddd",localStorage.getItem('f_id'));


console.log('shreenath ji jai this.POSTDATA lectures --> ',this.POSTDATA);
    return this.http.post(`${environment.baseUrl}index.php`,this.POSTDATA,httpOptions)
    //return this.dummyjso;

   }
}
