import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  POSTDATA:any=[];
  constructor(private http: HttpClient) { }



  register(name,username,contact,password,type): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })};
      
console.log("xcxcxcxcxc",name);


    var formvalue = new FormData();
    formvalue.append('name', name); // Append the 'name' field with the value of the 'name' variable
    formvalue.append('username', username); // Append the 'username' field with the value of the 'username' variable
    formvalue.append('contact', contact); // Append the 'contact' field with the value of the 'contact' variable
    formvalue.append('password', password); // Append the 'password' field with the value of the 'password' variable
    formvalue.append('type', type); // Append the 'type' field with the value of the 'type' variable
    
console.log('shreenath ji jai this.POSTDATA> ',formvalue);
    return this.http.post(`${environment.baseUrl}store-action=user-create`,formvalue)
    

   }
}
