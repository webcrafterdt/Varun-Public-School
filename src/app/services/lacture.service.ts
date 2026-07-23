import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LactureService {
  login_student:any;
  clgid:any;
  user:any;
  pass:any;
  sess:any;
  POSTDATA:any=[];
  dummyjso:any=[];
  session:any;
  f_id:any;
  college:any;
  constructor(private http: HttpClient) { }



  view_lacture(): Observable<any>
  {
    
    /*console.log('email > ',email);
    console.log('password > ',password);
    console.log('session > ',session);
    console.log('college > ',college);
    */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};
      



this.POSTDATA=
{
        action: 'api',
        page: 'student_lecture',
        f_id: localStorage.getItem('f_id'),
        sem: " ",
        session: localStorage.getItem('session'),
        college: localStorage.getItem('college')
}

//this.getlocalstoragedata().then (()=>{
  console.log("xcxcxcdddd",localStorage.getItem('f_id'));


console.log('shreenath ji jai this.POSTDATA lectures --> ',this.POSTDATA);
    return this.http.post(`${environment.baseUrl}index.php`,this.POSTDATA,httpOptions)
    //return this.dummyjso;

   }


   lacture_details(id): Observable<any>
   {
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/x-www-form-urlencoded'
       })};
 
 this.POSTDATA=
 {
         action: 'api',
         page: 'student_lecture_details',
         p_id: id,
         sem: " ",
         session: localStorage.getItem('session'),
         college: localStorage.getItem('college')
 }
 
 
 
 console.log('shreenath ji jai this.POSTDATA lectures details --> ',this.POSTDATA);
     return this.http.post(`${environment.baseUrl}index.php`,this.POSTDATA,httpOptions)
     //return this.dummyjso;
 
    }
}
