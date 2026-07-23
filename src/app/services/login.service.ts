import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  username:any;
  password:any;
  
  POSTDATA:any=[];
  POSTDATA1:any=[];

  login(username,password): Observable<any>
  {

    console.log('password > ',password);
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      


console.log(' username> ',username);
console.log(' password> ',password);
this.POSTDATA=
{
   userid: username,
   password: password
       
}

let POSTDATA = new FormData();
POSTDATA.append('userid' , username);
POSTDATA.append('password' , password);


//console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
//console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
console.log('environment.baseUrl ==>',environment.baseUrl);
console.log('this.POSTDATA ==>',this.POSTDATA);
    return this.http.post(`${environment.baseUrl}user_login.php`,POSTDATA)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

     }












     testsignup(): Observable<any>
     {

       
       
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json'
         })};
         
   
   

  //  this.POSTDATA=
  //  {
  //     userid: username,
  //     password: password
          
  //  }
  //=&&contact=1234567891&password=123456&type=2
   let POSTDATA = new FormData();
   POSTDATA.append('name' , 'test1');
   POSTDATA.append('username' , 'usernametest@gmail.com');
   POSTDATA.append('contact' , '1234567891');
   POSTDATA.append('password' , '123456');
   POSTDATA.append('type' , '2');
   
   //console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
   //console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
   console.log('environment.baseUrl ==>',environment.baseUrl);
   console.log('this.POSTDATA ==>',this.POSTDATA);
       return this.http.post(`https://sanatanyug.org/api/store-action=user-create`,POSTDATA)
       //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
       //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)
   
        }


        upload_pdf(base64data): Observable<any>
        {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })};
      
      let POSTDATA = new FormData();
      
      POSTDATA.append('base64data1' ,base64data);
      
      
           return this.http.post(`${environment.baseUrl}save_base64.php`,POSTDATA)
         }

}


