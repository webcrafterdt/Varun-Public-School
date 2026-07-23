import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GroupchatService {
  imageFile: string;

  constructor(private http: HttpClient) { }


  POSTDATA:any=[];
  fromt_date:any;
  group_list(): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};

let POSTDATA = new FormData();


POSTDATA.append('tid',localStorage.getItem('tid'));


     return this.http.post(`${environment.baseUrl}/teacher_api/groups.php`,POSTDATA)

   }


   group_detail(groupid): Observable<any>
   {
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};
 
 let POSTDATA = new FormData();
 POSTDATA.append('groupid',groupid);
      return this.http.post(`${environment.baseUrl}/teacher_api/groups.php`,POSTDATA)
 
    }

    group_class_wise_detail(transid): Observable<any>
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
  
  let POSTDATA = new FormData();
  POSTDATA.append('transid',transid);
       return this.http.post(`${environment.baseUrl}/teacher_api/groups_class_wise.php`,POSTDATA)
  
     }
    

    group_student_class_list(groupid): Observable<any>
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
  
  let POSTDATA = new FormData();
  POSTDATA.append('groupid',groupid);
       return this.http.post(`${environment.baseUrl}/teacher_api/chat_group_class_list.php`,POSTDATA)
  
     }



    group_chat(groupid,message_from_user_id): Observable<any>
   {
      const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};
 
 let POSTDATA = new FormData();
 POSTDATA.append('groupid',groupid);
 POSTDATA.append('userid',message_from_user_id);

 POSTDATA.append('student_id',localStorage.getItem('studentid'));
 
    if(groupid) { //For Groups Messages
      return this.http.post(`${environment.baseUrl}/teacher_api/group_chat.php`,POSTDATA)
    }
    else
    {
      return this.http.post(`${environment.baseUrl}/teacher_api/personal_chat.php`,POSTDATA)      
    }
 
    }



    student_individual_chat(groupid,message_from_user_id,Student_Id): Observable<any>
    {
       const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
  
  let POSTDATA = new FormData();
  POSTDATA.append('groupid',groupid);
  POSTDATA.append('userid',message_from_user_id);
  POSTDATA.append('student_id',Student_Id);


  // console.log('groupid this.chat_box==>', groupid);
   console.log('message_from_user_id this.chat_box==>', message_from_user_id);
  // console.log('student student_id.chat_box==>', student_id);
  
       return this.http.post(`${environment.baseUrl}/teacher_api/student_individual_chat.php`,POSTDATA)
  
     }



    send_message(groupid,message_text,message_from_user_id,userImg,PdfFileUpdate): Observable<any>
    {
        const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};
 let imageFile:any;
 let POSTDATA = new FormData();
 POSTDATA.append('group_chat_master_id',groupid);
 POSTDATA.append('message_from_user_id',message_from_user_id);
 POSTDATA.append('message_from_user_type',localStorage.getItem('utype'));
 POSTDATA.append('message_from_group_id',groupid);
 POSTDATA.append('message_to_group_id',groupid);
 POSTDATA.append('message_text',message_text);
 
//  console.log("11 userImg====>",userImg.length);
//  console.log("11 PdfFileUpdate====>",PdfFileUpdate.length);


if(Array.isArray(userImg)) {
  console.log("NOT EMPTY");
  
  this.imageFile='1';
} else {
  console.log("EMPTY");
  this.imageFile='0';
}

if(this.imageFile == '1')
  {
    POSTDATA.append('Image_Attached',userImg);
  }
//  if(userImg)
//  {console.log("userImg====>",userImg);
//   POSTDATA.append('Image_Attached',userImg);
//  }

 if(PdfFileUpdate)
  {
    POSTDATA.append('pdfimage',PdfFileUpdate);
    
  }
  console.log("PdfFileUpdate 11====>",PdfFileUpdate);

 
      return this.http.post(`${environment.baseUrl}/teacher_api/chat_message_save.php`,POSTDATA)
   }


   send_message_individual_student(groupid,message_text,message_from_user_id,userImg,studentid,PdfFileUpdate): Observable<any>
    {
      const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};
 
 let POSTDATA = new FormData();
 POSTDATA.append('group_chat_master_id',groupid);
 POSTDATA.append('message_from_user_id',message_from_user_id);
 POSTDATA.append('message_from_user_type',localStorage.getItem('utype'));
 POSTDATA.append('message_from_group_id',groupid);
 POSTDATA.append('message_to_group_id',groupid);
 POSTDATA.append('message_text',message_text);
 POSTDATA.append('student_id',studentid);
 

 if(Array.isArray(userImg)) {
  console.log("NOT EMPTY");
  
  this.imageFile='1';
} else {
  console.log("EMPTY");
  this.imageFile='0';
}
 
if(this.imageFile == '1')
  {
    POSTDATA.append('Image_Attached',userImg);
  }
 
 
 if(PdfFileUpdate)
  {
    POSTDATA.append('pdfimage',PdfFileUpdate);
    
  }
  console.log("PdfFileUpdate 11====>",PdfFileUpdate);
 
      return this.http.post(`${environment.baseUrl}/teacher_api/chat_message_student_save.php`,POSTDATA)
   }
  
  
    send_notification(groupid):Observable<any>
    {
      const httpOptions ={
        headers: new HttpHeaders ({
          'Content-Type': 'application/json'
        })};
      
      let POSTDATA =new FormData();
      POSTDATA.append('group_chat_master_id',groupid)

        return this.http.post(`${environment.baseUrl}/teacher_api/send_push_for_chat_message.php`,POSTDATA)
      }
    

      send_notification_individual(studentid):Observable<any>
      {
        const httpOptions ={
          headers: new HttpHeaders ({
            'Content-Type': 'application/json'
          })};
        
        let POSTDATA =new FormData();
        POSTDATA.append('student_id',studentid)
  
          return this.http.post(`${environment.baseUrl}/teacher_api/send_push_for_individual_message.php`,POSTDATA)
        }
      
    



     /*********************************************Student Groups stasts***************************************************/

     stu_roup_list(): Observable<any>
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};
  
  let POSTDATA = new FormData();
  
  
  POSTDATA.append('tid',localStorage.getItem('tid'));
  POSTDATA.append('transid',localStorage.getItem('transid'));
  console.log("localStorage.getItem('transid')==>",localStorage.getItem('transid'));
  
  
       return this.http.post(`${environment.baseUrl}stu_groups.php`,POSTDATA)
  
     }

     chatgpt(message): Observable<any>
     {

       const headers = new HttpHeaders({
      'Content-Type': 'application/json',
   
  });

    const body = {
      prompt: message,
      max_tokens: 150,
      model:"gpt-3.5-turbo"
    };
    let ChatgprApiUrl = 'https://api.openai.com/v1/completions';

      return this.http.post<any>(ChatgprApiUrl, body, { headers });
   //   model: "text-davinci-003" // Example of a model that may be available within free or limited-use plans




    //   const response = await fetch("https://api.openai.com/v1/completions", {
    //     method: "POST",
    //     headers: {
    //         Authorization: `Bearer ${API_KEY}`,
    //         "Contant-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         model: "text-davinci-003",
    //         prompt: "hello, how are you today?",
    //         max_tokens: 7
    //     })
    // })
    // const data = await response.json()
    // console.log(data)


     }


     current_app_version(): Observable<any>
     {
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json'
         })};
   
   let POSTDATA = new FormData();
   POSTDATA.append('appversion','');
        return this.http.post(`${environment.baseUrl}/current_app_version.php`,POSTDATA)
   
      }

}




