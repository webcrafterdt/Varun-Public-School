import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MarkattendanceService {
  POSTDATA: any = [];
  UpdateMarksApi:any;
  constructor(public http: HttpClient) {

  }


  checkattendanceforday(date,transid,sessionstartdate,sessionenddate): Observable<any> {
    let POSTDATA = new FormData();
    //POSTDATA.append('transid', '1');
    POSTDATA.append('transid', transid);
    POSTDATA.append('date', date);
    POSTDATA.append('sessionstartdate', sessionstartdate);
    POSTDATA.append('sessionenddate', sessionenddate);
    return this.http.post(`${environment.baseUrl}/teacher_api/CheckAttendanceOnDay.php`, POSTDATA)

  }

  checkattendanceforday_student(date,transid): Observable<any> {
    let POSTDATA = new FormData();
    //POSTDATA.append('transid', '1');
    POSTDATA.append('transid', transid);
    POSTDATA.append('date', date);
    return this.http.post(`${environment.baseUrl}CheckAttendanceOnDay.php`, POSTDATA)

  }

  studentlist(date,transid): Observable<any> {
    let POSTDATA = new FormData();
    //POSTDATA.append('transid', '1');
    POSTDATA.append('transid', transid);
    POSTDATA.append('date', date);
    return this.http.post(`${environment.baseUrl}/teacher_api/StudentAttendanceMarkApps.php`, POSTDATA)

  }
  markattendance(attendancestring,date,transid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('studentLegendData',attendancestring);
    POSTDATA.append('date',date);
    POSTDATA.append('tid',localStorage.getItem('tid'));
    POSTDATA.append('transid',transid);
    return this.http.post(`${environment.baseUrl}/teacher_api/MarkAttendanceApps.php`, POSTDATA)
  }


  MarkAtt(Marks_Legend_Value,stuid,transid,typeofmarks,examsubdivtransid,subid,isgradded,subjectlevelid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('transid',transid);
    POSTDATA.append('Marks_Legend_Value',Marks_Legend_Value);
    POSTDATA.append('typeofmarks',typeofmarks);
    POSTDATA.append('stuid',stuid);
    POSTDATA.append('isgradded',isgradded);
    POSTDATA.append('subjectlevelid',subjectlevelid);
    
    
console.log('examsubdivtransid==>',examsubdivtransid,'subid==>',subid,'transid==>',transid,'Marks_Legend_Value==>',Marks_Legend_Value,'typeofmarks==>',typeofmarks,'stuid==>',stuid);

    if(isgradded == 'Y')
      {
        this.UpdateMarksApi='exam_student_list.php';
      }
    else
      {
        this.UpdateMarksApi='exam_student_list.php';
      }


    return this.http.post(`${environment.baseUrl}/teacher_api/`+this.UpdateMarksApi, POSTDATA)
  }



  // DeleteMarks(examsubdivtransid,subid,transid): Observable<any> {
  //   let POSTDATA = new  FormData();
  //   POSTDATA.append('examsubdivtransid',examsubdivtransid);
  //   POSTDATA.append('subid',subid);
  //   POSTDATA.append('transid',transid);
  //   return this.http.post(`${environment.baseUrl}/teacher_api/teachmarksdelete.php`, POSTDATA)
  // }
    DeleteMarks(examsubdivtransid,subid,transid,levelid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('transid',transid);
    POSTDATA.append('levelid',levelid);
    
    return this.http.post(`${environment.baseUrl}/teacher_api/teachmarksdelete.php`, POSTDATA)
  }
  


  Getmarksdetails(examsubdivtransid,subid,transid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('transid',transid);
    POSTDATA.append('header_part_only','Y');
    console.log('transssss id =>',transid);
    console.log('examsubdivtransid id ===>',examsubdivtransid);
    return this.http.post(`${environment.baseUrl}/teacher_api/exam_student_list.php`, POSTDATA)
  }


  MinMaxMarks(examsubdivtransid,subid,transid,subjectlevelid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('transid',transid);
    POSTDATA.append('subjectlevelid',subjectlevelid);
    
    
    
    return this.http.post(`${environment.baseUrl}/teacher_api/marksdetail.php`, POSTDATA)
  }

  // CreateExamDetail(maxmarks,minmarks,include_in_gt,details,examsubdivtransid,subid,transid,markty): Observable<any> {
  //   let POSTDATA = new  FormData();
  //   POSTDATA.append('examsubdivtransid',examsubdivtransid);
  //   POSTDATA.append('subid',subid);
  //   POSTDATA.append('transid',transid);
  //   POSTDATA.append('maxmarks',maxmarks);
  //   POSTDATA.append('minmarks',minmarks);
  //   POSTDATA.append('include_in_gt',include_in_gt);
  //   POSTDATA.append('details',details);
  //   POSTDATA.append('isgrade',markty);
    
    
  //   return this.http.post(`${environment.baseUrl}/teacher_api/create_exam_detail.php`, POSTDATA)
  // }

    CreateExamDetail(maxmarks,minmarks,include_in_gt,details,examsubdivtransid,subid,transid,markty,levelid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('transid',transid);
    POSTDATA.append('maxmarks',maxmarks);
    POSTDATA.append('minmarks',minmarks);
    POSTDATA.append('include_in_gt',include_in_gt);
    POSTDATA.append('details',details);
    POSTDATA.append('isgrade',markty);
    POSTDATA.append('subjectlevel_id',levelid);
    
    
    return this.http.post(`${environment.baseUrl}/teacher_api/create_exam_detail.php`, POSTDATA)
  }


  markstype(transid,examsubdivtransid,subid,subjectlevelid): Observable<any> {
    console.log("transid>>>>",transid);
    console.log("examsubdivtransid>>>>",examsubdivtransid);
    console.log("subid>>>>",subid);
    let POSTDATA = new  FormData();
    POSTDATA.append('transid',transid);
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('subjectlevelid',subjectlevelid);
    return this.http.post(`${environment.baseUrl}/teacher_api/teach_marks_detail.php`, POSTDATA)
  }




  // getstudentlist(transid,examsubdivtransid,subid): Observable<any> {
  //   console.log("transid>>>>",transid);
  //   console.log("examsubdivtransid>>>>",examsubdivtransid);
  //   console.log("subid>>>>",subid);
  //   let POSTDATA = new  FormData();
  //   POSTDATA.append('transid',transid);
  //   POSTDATA.append('examsubdivtransid',examsubdivtransid);
  //   POSTDATA.append('subid',subid);
  //   return this.http.post(`${environment.baseUrl}/teacher_api/examheader.php`, POSTDATA)
  // }

  getstudentlist(transid,examsubdivtransid,subid,levelid): Observable<any> {
    console.log("transid>>>>",transid);
    console.log("examsubdivtransid>>>>",examsubdivtransid);
    console.log("subid>>>>",subid);
    let POSTDATA = new  FormData();
    POSTDATA.append('transid',transid);
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('subject_level_id',levelid);
    return this.http.post(`${environment.baseUrl}/teacher_api/examheader.php`, POSTDATA)
  }



    getmymarksexam(transid,examsubdivtransid,subid,levelid): Observable<any> {
    console.log("transid>>>>",transid);
    console.log("examsubdivtransid>>>>",examsubdivtransid);
    console.log("subid>>>>",subid);
    let POSTDATA = new  FormData();
    POSTDATA.append('transid',transid);
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('subject_level_id',levelid);
    POSTDATA.append('tid',localStorage.getItem('tid'));
    return this.http.post(`${environment.baseUrl}/teacher_api/mymarks_exams.php`, POSTDATA)
  }

  // UpdateMarksSetting(transid,examsubdivtransid,subid,IncludeInGTTotal): Observable<any> {
  //   console.log("transid>>>>",transid);
  //   console.log("examsubdivtransid>>>>",examsubdivtransid);
  //   console.log("subid>>>>",subid);
  //   let POSTDATA = new  FormData();
  //   POSTDATA.append('transid',transid);
  //   POSTDATA.append('examsubdivtransid',examsubdivtransid);
  //   POSTDATA.append('subid',subid);
  //   POSTDATA.append('include_in_gt',IncludeInGTTotal);
    
  //   return this.http.post(`${environment.baseUrl}/teacher_api/teachedit_marks.php`, POSTDATA)
  // }

    UpdateMarksSetting(transid,examsubdivtransid,subid,IncludeInGTTotal,levelid): Observable<any> {
    console.log("transid>>>>",transid);
    console.log("examsubdivtransid>>>>",examsubdivtransid);
    console.log("subid>>>>",subid);
    let POSTDATA = new  FormData();
    POSTDATA.append('transid',transid);
    POSTDATA.append('examsubdivtransid',examsubdivtransid);
    POSTDATA.append('subid',subid);
    POSTDATA.append('include_in_gt',IncludeInGTTotal);
    POSTDATA.append('levelid',levelid);
    
    
       return this.http.post(`${environment.baseUrl}/teacher_api/teachedit_marks.php`, POSTDATA)
  }
  

  //Mark as holiday

  markasholiday(date,transid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('date',date);
    POSTDATA.append('transid',transid);
    return this.http.post(`${environment.baseUrl}/teacher_api/MarkHoliday.php`, POSTDATA)
  }



  markBulkholiday(date,transid): Observable<any> {
    let POSTDATA = new  FormData();
    POSTDATA.append('date',date);
    POSTDATA.append('transid',transid);
    return this.http.post(`${environment.baseUrl}/teacher_api/MarkBulkHoliday.php`, POSTDATA)
  }

  send_notification(date,transid):Observable<any>
  {
    const httpOptions ={
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })};
    
    let POSTDATA =new FormData();
    POSTDATA.append('att_date',date);
    POSTDATA.append('transid',transid);
console.log('att date ==>',date);
console.log('att transid ==>',transid);
      return this.http.post(`${environment.baseUrl}/teacher_api/send_push_for_mark_attendance.php`,POSTDATA)
    }



    send_message_to_absent_student(date,transid):Observable<any>
  {
    const httpOptions ={
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })};
    
    let POSTDATA =new FormData();
    POSTDATA.append('att_date',date);
    POSTDATA.append('transid',transid);
console.log('att date ==>',date);
console.log('att transid ==>',transid);
      return this.http.post(`${environment.baseUrl}/teacher_api/send_message_to_absent_student.php`,POSTDATA)
    }

    

    Legendlist(): Observable<any> {
      let POSTDATA = new FormData();
      //POSTDATA.append('transid', '1');
      POSTDATA.append('transid', "transid");
      
      return this.http.post(`${environment.baseUrl}legendlist.php`, POSTDATA)
  
    }

} 


