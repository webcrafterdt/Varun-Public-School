import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  POSTDATA:any=[];
  imageArray:any=[];
  constructor(private http: HttpClient) { }


  mahatmadetails(): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })};
      
console.log("xcxcxcxcxc",name);


    var formvalue = new FormData();
    formvalue.append('name', '1'); // Append the 'name' field with the value of the 'name' variable
    
   return this.http.post(`https://sanatanyug.org/api/get-action=mahatma-details`,formvalue)

   }

  userdetails(): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })};
      
console.log("xcxcxcxcxc",name);


    var formvalue = new FormData();
    formvalue.append('name', '1'); // Append the 'name' field with the value of the 'name' variable
    

    //return this.http.post(`${environment.baseUrl}get-action=user-details`,formvalue)
      return this.http.post(`https://sanatanyug.org/api/get-action=user-details`,formvalue)

   }



   savenormaluserdetail(name,username,fathers_name,relative_names,relative_ages,relative_statuses
    ,relative_past_dates,relative_contacts,relative_aadhaars,
    relative_relation_ids,relative_occupation_sectors,
    relative_occupation_departments,relative_occupation_names,
    relative_occupation_details,mothers_gotra,paternal_grandmothers_gotra
    ,maternal_grandmothers_gotra,contact,address,state_id,city_id,kuldevata,kuldevi,gotra_id,userid,dob,caste_id,occupation_sector,occupation_department,occupation_name,occupation_detail,relative_image
     ,relative_wedding_anniversary_date,relative_birth_date):Observable<any>
   {
    var formvalue = new FormData();
    //formvalue.append('name', '1'); // Append the 'name' field with the value of the 'name' variable

    formvalue.append('name', name);
    formvalue.append('username', username);
    formvalue.append('fathers_name', fathers_name);
   
    this.imageArray = [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...'
    ];
    console.log('relative_wedding_anniversary_date==>',relative_wedding_anniversary_date);
//formvalue.append('relative_image', JSON.stringify(relative_image));
formvalue.append('relative_wedding_anniversary_dates', JSON.stringify(relative_wedding_anniversary_date));
formvalue.append('relative_birth_dates', JSON.stringify(relative_birth_date));
formvalue.append('relative_image', JSON.stringify(relative_image));
formvalue.append('relative_names', JSON.stringify(relative_names));
formvalue.append('relative_names', JSON.stringify(relative_names));
formvalue.append('relative_ages', JSON.stringify(relative_ages));
formvalue.append('relative_statuses', JSON.stringify(relative_statuses));
formvalue.append('relative_past_dates', JSON.stringify(relative_past_dates));
formvalue.append('relative_contacts', JSON.stringify(relative_contacts));
formvalue.append('relative_aadhaars', JSON.stringify(relative_aadhaars));
formvalue.append('relative_relation_ids', JSON.stringify(relative_relation_ids));
formvalue.append('relative_occupation_sectors', JSON.stringify(relative_occupation_sectors));
formvalue.append('relative_occupation_departments', JSON.stringify(relative_occupation_departments));
formvalue.append('relative_occupation_names', JSON.stringify(relative_occupation_names));
formvalue.append('relative_occupation_details', JSON.stringify(relative_occupation_details));
formvalue.append('mothers_gotra', mothers_gotra);
formvalue.append('paternal_grandmothers_gotra', paternal_grandmothers_gotra);
formvalue.append('maternal_grandmothers_gotra', maternal_grandmothers_gotra);
formvalue.append('contact', contact);
formvalue.append('address', address);
formvalue.append('state_id', state_id);
formvalue.append('city_id', city_id);
formvalue.append('kuldevata', kuldevata);
formvalue.append('kuldevi', kuldevi);
formvalue.append('gotra_id', gotra_id);
formvalue.append('user_id',userid);
formvalue.append('dob',dob);
formvalue.append('occupation_sector',occupation_sector);
formvalue.append('occupation_department',occupation_department);
formvalue.append('occupation_name',occupation_name);
formvalue.append('occupation_detail',occupation_detail);
formvalue.append('caste_id',caste_id);

    //return this.http.post(`${environment.baseUrl}store-action=user-detail`,formvalue)
    return this.http.post(`https://sanatanyug.org/api/store-action=user-detail`,formvalue)
   }









    //save mahatma details
   savemahatmadetail(registration_id,name,fathers_name,permanent_address,temporary_address,
    contact,voter_id,aadhaar_id,dob,birth_religion,birthplace,birthstate,monk_date,
    marital_status,ashram,initiation_place,education,initiation,gurus_name,gurus_address,
    gurus_location,facebook,instagram,youtube,whatsapp,website,mahatma_category,
    sect,arena,description,service_name,service_price,service_note,image)
   {
    console.log('service_name ==>',service_name);
   var formvalue = new FormData();
    //formvalue.append('name', '1'); // Append the 'name' field with the value of the 'name' variable

    formvalue.append('registration_id', registration_id);
    formvalue.append('name', name);
    formvalue.append('image', image);
    formvalue.append('fathers_name', fathers_name);
    formvalue.append('permanent_address', permanent_address);
    formvalue.append('temporary_address', temporary_address);
    formvalue.append('contact', contact);
    formvalue.append('voter_id', voter_id);
    formvalue.append('aadhaar_id', aadhaar_id);
    formvalue.append('dob', dob);
    formvalue.append('birth_religion', birth_religion);
    formvalue.append('birthplace', birthplace);
    formvalue.append('birthstate', birthstate);
    formvalue.append('monk_date', monk_date);
    formvalue.append('marital_status',marital_status);
    formvalue.append('ashram',ashram);

 
    formvalue.append('initiation_place',initiation_place);
    formvalue.append('education',education);
    formvalue.append('initiation',initiation);
    formvalue.append('gurus_name',gurus_name);
    formvalue.append('gurus_address',gurus_address);

    formvalue.append('gurus_location',gurus_location);
    formvalue.append('facebook',facebook);
    formvalue.append('instagram',instagram);
    formvalue.append('youtube',youtube);
    formvalue.append('whatsapp',whatsapp);
    formvalue.append('website',website);
    formvalue.append('mahatma_category',mahatma_category);
    formvalue.append('sect',sect);
    formvalue.append('arena',arena);
    formvalue.append('description',description);

    



    formvalue.append('service_name', JSON.stringify(service_name));
    formvalue.append('service_price', JSON.stringify(service_price));
    formvalue.append('service_note', JSON.stringify(service_note));



    //return this.http.post(`${environment.baseUrl}store-action=user-detail`,formvalue)
    return this.http.post(`https://sanatanyug.org/api/store-action=mahatma-detail`,formvalue)
   }
}

