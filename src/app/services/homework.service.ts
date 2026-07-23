import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(private http: HttpClient) { }
  POSTDATA:any=[];
  







        homework(): Observable<any>
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
          return this.http.post(`${environment.baseUrl}StudentHomeWork.php`,POSTDATA)
          //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
          //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)
      
           }
      

      homework_download(homeworkid): Observable<any>
        {

          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })};

      // this.POSTDATA=
      // {
      //   homeworkid: homeworkid
      // }
      
      let POSTDATA = new FormData();
      POSTDATA.append('homeworkid' , homeworkid);
      
      
         return this.http.post(`${environment.baseUrl}StudentHomeWork_Download.php`,POSTDATA)
           }
      
      

  docuploading(): Observable<any>
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
      
          return this.http.post(`${environment.baseUrl}document_uploading.php`,POSTDATA)
           }



           DocUploading(FileArray,attachmentUploadLocationArray,FileNameArray): Observable<any>
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
    
      console.log("here wewwee are ==>",FileArray);


    POSTDATA.append('stuid', localStorage.getItem('studentid'));
    POSTDATA.append('FileArray', JSON.stringify(FileArray));
    POSTDATA.append('FileNameArray', JSON.stringify(FileNameArray));
    POSTDATA.append('attachmentUploadLocationArray', JSON.stringify(attachmentUploadLocationArray));
      
          //return this.http.post(`${environment.baseUrl}document_uploading.php`,POSTDATA)
          //return this.http.post('http://192.168.2.4/development/school/greatsatyam-jdh/student_attachment_update.php', POSTDATA)
          return this.http.post('https://greatsatyam.literom.com/student_attachment_update.php', POSTDATA)
           }

     
}

