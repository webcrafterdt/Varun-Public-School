import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CircularService {

  constructor(private http: HttpClient) { }
  POSTDATA: any = [];

  circular(): Observable<any> {





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
    return this.http.post(`${environment.baseUrl}circular_app.php`, POSTDATA)
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=`{student_lacture})
    //return this.http.get(`${environment.baseUrl}index.php?action=api&page=student_lacture`)

  }




  teachercircular(): Observable<any> {





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


    console.log('environment.baseUrl ==>', environment.baseUrl);
    console.log('this.POSTDATA ==>', this.POSTDATA);
    return this.http.post(`${environment.baseUrl}teacher_circular.php`, POSTDATA)
  }




  addcircular_list(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();
    POSTDATA.append('stuid', localStorage.getItem('studentid'));


    return this.http.post(`${environment.baseUrl}/teacher_api/circular_Add_List.php`, POSTDATA)

  }

  submitcircular(title, CircularContent, fromdate, todate,selectedFileName, Attachment): Observable<any> {
    let POSTDATA = new FormData();
    POSTDATA.append('Title', title);
    POSTDATA.append('CircularContent', CircularContent);
    POSTDATA.append('fromdate', fromdate);
    POSTDATA.append('todate', todate);
    POSTDATA.append('Attachment', Attachment);
    POSTDATA.append('selectedFileName', selectedFileName);

    //return this.http.post('http://192.168.2.4/development/school/greatsatyam-jdh/app_circular_insert.php', POSTDATA)
    return this.http.post('https://greatsatyam.literom.com/app_circular_insert.php', POSTDATA)
    
  }


  editcircular(title, CircularContent, fromdate, todate, selectedFileName,Attachment,CircularId): Observable<any> {
    let POSTDATA = new FormData();
    POSTDATA.append('Title', title);
    POSTDATA.append('CircularContent', CircularContent);
    POSTDATA.append('fromdate', fromdate);
    POSTDATA.append('todate', todate);
    POSTDATA.append('Attachment', Attachment);
    POSTDATA.append('circular_id', CircularId);
    POSTDATA.append('selectedFileName', selectedFileName);
    
    //return this.http.post('http://192.168.2.4/development/school/greatsatyam-jdh/app_circular_update.php', POSTDATA)
    return this.http.post('https://greatsatyam.literom.com/app_circular_update.php', POSTDATA)
  }



  //assigned circular to student list
  AssignedCircularStudent(circular_id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', circular_id);


    return this.http.post(`${environment.baseUrl}/teacher_api/assigned_circular_student.php`, POSTDATA)

  }


  //assigned circular to staff list
  AssignedCircularStaff(circular_id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', circular_id);


    return this.http.post(`${environment.baseUrl}/teacher_api/assigned_circular_staff.php`, POSTDATA)

  }


  InsertStudentCircular(Selected_Students, circular_id, CircularType): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', circular_id);
    POSTDATA.append('Selected_Students', Selected_Students);
    POSTDATA.append('User_Type', 'S');
    POSTDATA.append('CircularType', CircularType);


    return this.http.post(`${environment.baseUrl}/teacher_api/insert_circular_student.php`, POSTDATA)

  }


  InsertStaffCircular(Selected_Staff, circular_id, CircularType): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', circular_id);
    POSTDATA.append('Selected_Staff', Selected_Staff);
    POSTDATA.append('User_Type', 'T');
    POSTDATA.append('CircularType', CircularType);


    return this.http.post(`${environment.baseUrl}/teacher_api/insert_circular_staff.php`, POSTDATA)

  }


  CircularStudentList(transid, Circular_Master_Id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();

    POSTDATA.append('user_id', localStorage.getItem('tid'));
    POSTDATA.append('transid', transid);
    POSTDATA.append('Circular_Master_Id', Circular_Master_Id);

    return this.http.post(`${environment.baseUrl}/teacher_api/student_circular_list.php`, POSTDATA)
  }

  CircularStaffList(deptid, CircularId): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();


    POSTDATA.append('deptid', deptid);
    POSTDATA.append('CircularId', CircularId);


    return this.http.post(`${environment.baseUrl}/teacher_api/StaffList.php`, POSTDATA)
  }


  DeleteCircular(Circular_Master_Id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let POSTDATA = new FormData();


    POSTDATA.append('circular_id', Circular_Master_Id);

    return this.http.post(`${environment.baseUrl}/teacher_api/delete_circular.php`, POSTDATA)
  }



  DepartmentList(Circular_Master_Id): Observable<any> {


    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', Circular_Master_Id);

    return this.http.post(`${environment.baseUrl}/teacher_api/departmentlist.php`, POSTDATA)
  }

  DeleteStudentCircular(CircularId, DeleteType, stuid,Circular_Trans_Id,usertype): Observable<any> {
    
    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', CircularId);
    POSTDATA.append('DeleteType', DeleteType);
    POSTDATA.append('stuid', stuid);
    POSTDATA.append('usertype', usertype);
    POSTDATA.append('Circular_Trans_Id', Circular_Trans_Id);
    
    return this.http.post(`${environment.baseUrl}/teacher_api/deleteusercircular.php`, POSTDATA)

  }


  
  assigned_circular_master(Circular_Master_Id): Observable<any> {


    let POSTDATA = new FormData();
    POSTDATA.append('circular_id', Circular_Master_Id);

    return this.http.post(`${environment.baseUrl}/teacher_api/assignedcircularmaster.php`, POSTDATA)
  }



  profile_update(Profile_Pic): Observable<any> {

    let POSTDATA = new FormData();
    POSTDATA.append('stuimage',Profile_Pic);
    POSTDATA.append('stuid',localStorage.getItem('studentid'));

    return this.http.post(`${environment.baseUrl}/setprofile_image.php`, POSTDATA)
  }


  profile():Observable<any>{
    let POSTDATA =new FormData();
    POSTDATA.append('stuid',localStorage.getItem('studentid'));
    return this.http.post(`${environment.baseUrl}/profile.php`,POSTDATA)
    
  }

  
}

