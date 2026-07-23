import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChangepassService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  
  change_pass(password,confirm_password,old_password): Observable<any>
  {


console.log('post_change_password ==>',this.POSTDATA);

let POSTDATA = new FormData();
     

POSTDATA.append('stuid' ,localStorage.getItem('studentid'));
POSTDATA.append('new_password',password);
POSTDATA.append('confirm_password',confirm_password);
POSTDATA.append('old_password',old_password);


    return this.http.post(`${environment.baseUrl}change_password.php`,POSTDATA)

   }

   teach_change_pass(password,confirm_password,old_password): Observable<any>
   {
 
 
 console.log('post_change_password ==>',this.POSTDATA);
 
 let POSTDATA = new FormData();
      
 
 POSTDATA.append('tid' ,localStorage.getItem('tid'));
 POSTDATA.append('new_password',password);
 POSTDATA.append('confirm_password',confirm_password);
 POSTDATA.append('old_password',old_password);
 
 
     return this.http.post(`${environment.baseUrl}teacher_api/teach_change_password.php`,POSTDATA)
 
    }

   
}
