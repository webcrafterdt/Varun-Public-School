import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  POSTDATA: any = [];
  constructor(private http: HttpClient) { }


  attendance(): Observable<any> {




    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };




    this.POSTDATA =
    {
      COMMON_INPUT: {
        REQUEST_TIME_STAMP: 1444838717,
        DEVICE_SIGNATURE: {
          ID: '5dd92df00a90ed065dd92df00a90ed06',
          NAME: 'iPhone 5',
          OS_VERSION: '10.1',
          PLATFORM: 'iOS'
        },
        APP_VERSION: '1.0.1',
        AUTH_KEY: '7c4a8d09ca3762af61e59520943dc987abc654',
        API_NAME: 'GET_ATTENDENCE_REPORT'
      },
      REQUEST: {
        student_master_id: localStorage.getItem('student_master_id')//,//'1140',
        //student_master_id: "911"
        //submitted : 'Y'
      }
    }



    //console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
    //console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
    console.log('this.POSTDATA attendance > ', this.POSTDATA);

    return this.http.post(`${environment.baseUrl}api_student_daily_attendence`, this.POSTDATA, httpOptions)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

  }



  attendance_new(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };




    this.POSTDATA =
    {
      stuid: localStorage.getItem('studentid')
    }

    let POSTDATA = new FormData();
    POSTDATA.append('stuid', localStorage.getItem('studentid'));


    //console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
    //console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
    console.log('environment.baseUrl ==>', environment.baseUrl);
    console.log('this.POSTDATA ==>', this.POSTDATA);
    return this.http.post(`${environment.baseUrl}attendance_script.php`, POSTDATA)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

  }



  CheckAttendanceClass(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };




    this.POSTDATA =
    {
      stuid: localStorage.getItem('studentid')
    }

    let POSTDATA = new FormData();
    POSTDATA.append('teacher_id', localStorage.getItem('tid'));


    //console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
    //console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
    console.log('environment.baseUrl ==>', environment.baseUrl);
    console.log('this.POSTDATA ==>', this.POSTDATA);
    return this.http.post(`${environment.baseUrl}teacher_api/checkAttendanceClass.php`, POSTDATA)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

  }




  TrackingClasses(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };




    this.POSTDATA =
    {
      stuid: localStorage.getItem('studentid')
    }
    let POSTDATA = new FormData();
    POSTDATA.append('teacher_id', localStorage.getItem('tid'));

    console.log('environment.baseUrl ==>', environment.baseUrl);
    console.log('this.POSTDATA ==>', this.POSTDATA);
    return this.http.post(`${environment.baseUrl}teacher_api/tracking_attendance_classes.php`, POSTDATA)
    

  }



  CheckStudentAttendance(): Observable<any> {
    const httpOptions = {
headers: new HttpHeaders({
  'Content-Type': 'application/json'
})
};




this.POSTDATA =
{
stuid: localStorage.getItem('studentid')
}

let POSTDATA = new FormData();
POSTDATA.append('stuid', localStorage.getItem('studentid'));
POSTDATA.append('transid', localStorage.getItem('transid'));


//console.log('shreenath ji jai this.POSTDATA_1> ',this.POSTDATA1);
//console.log('shreenath ji jai this.POSTDATA> ',this.POSTDATA);
console.log('environment.baseUrl ==>', environment.baseUrl);
console.log('this.POSTDATA ==>', this.POSTDATA);
return this.http.post(`${environment.baseUrl}student_attendance_script.php`, POSTDATA)
//return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
//return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

}





CheckExamClasses_Subject(): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };




  this.POSTDATA =
  {
    stuid: localStorage.getItem('studentid')
  }

  let POSTDATA = new FormData();
  POSTDATA.append('teacher_id', localStorage.getItem('tid'));



  console.log('environment.baseUrl ==>', environment.baseUrl);
  console.log('this.POSTDATA ==>', this.POSTDATA);
  return this.http.post(`${environment.baseUrl}teacher_api/mysubject_classes.php`, POSTDATA)
  //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
  //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

}

CheckExamClasses(): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };




  this.POSTDATA =
  {
    stuid: localStorage.getItem('studentid')
  }

  let POSTDATA = new FormData();
  POSTDATA.append('teacher_id', localStorage.getItem('tid'));



  console.log('environment.baseUrl ==>', environment.baseUrl);
  console.log('this.POSTDATA ==>', this.POSTDATA);
  return this.http.post(`${environment.baseUrl}teacher_api/CheckMarksClasses.php`, POSTDATA)
  //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
  //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

}


StuClassList(): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  this.POSTDATA =
  {
    stuid: localStorage.getItem('studentid')
  }
  let POSTDATA = new FormData();
  POSTDATA.append('teacher_id', localStorage.getItem('tid'));
  console.log('environment.baseUrl ==>', environment.baseUrl);
  console.log('this.POSTDATA ==>', this.POSTDATA);
  return this.http.post(`${environment.baseUrl}teacher_api/teacher_classlist.php`, POSTDATA)
}





AllClassList(): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  this.POSTDATA =
  {
    stuid: localStorage.getItem('studentid')
  }
  let POSTDATA = new FormData();
  POSTDATA.append('teacher_id', localStorage.getItem('tid'));
  console.log('environment.baseUrl ==>', environment.baseUrl);
  console.log('this.POSTDATA ==>', this.POSTDATA);
  return this.http.post(`${environment.baseUrl}teacher_api/allstulist.php`, POSTDATA)
}
}


