import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';
import {  MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';
import { UserdetailService } from 'src/app/services/userdetail.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-normaluserform',
  templateUrl: './normaluserform.page.html',
  styleUrls: ['./normaluserform.page.scss'],
})
export class NormaluserformPage implements OnInit {
  
  public mobile   = '';
  public password = '';
  public session = '';
  public college = '';
  downloadProgress = 0;
  public id1 = '';
  public id2 = '';
  urllink:any;
  shouldDisable:any=[];
  downloadUrl:any;
  castes:any=[];
  cities:any=[];
  gotras:any=[];
  states:any=[];
  relations:any=[];
  username:any;
  name:any;
  user_id:any;
  contact:any;
  checkboxes: { id: number; checked: boolean; }[] = [];
  relatives: any[] = []; // array to store the relative data
  relative_names:any[] =[];
  address:any;  
  fathers_name:any;  
  relative_ages:any[] =[];
  relative_statuses:any[] =[];
  relative_past_dates:any[] =[];
  relative_contacts:any[] =[];
  relative_aadhaars:any[] =[];
  relative_relation_ids:any[] =[];
  relative_occupation_sectors:any[] =[];
  relative_occupation_departments:any[] =[];
  relative_occupation_names:any[] =[];
  relative_occupation_details:any[] =[];
  mothers_gotra:any;
  paternal_grandmothers_gotra:any;
  maternal_grandmothers_gotra:any;
  state_id:any;
  city_id:any;
  kuldevata:any;
  kuldevi:any;
  gotra_id:any;  
  dob:any;
  caste_id:any;
  occupation_sector:any;
  occupation_department:any;
  occupation_name:any;
  occupation_detail:any;
  remative_image:any[] =[];
  relative_birth_date:any[] =[];
  relative_wedding_anniversary_date:any[] =[];
  constructor(private navCtrl: NavController,private router: Router,private loginservice: LoginService,public menuCtrl: MenuController,
    private storage: StorageService,private ionLoaderService: IonLoaderService,private toastservice: ToastService,
    private http: HttpClient,private userdetail: UserdetailService,private camera:Camera) { 
    this.menuCtrl.enable(false);

  
    this.shouldDisable=false;

   // this.downloadFile(this.urllink);
   for(let i=0; i<12; i++) {
  this.checkboxes.push({ id: i, checked: false });
}
  }

  

  register()
  {
      this.router.navigate(['/register'])
  }


  captureImage(index) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
  
    this.camera.getPicture(options).then((imageData) => {
      
      //this.remative_image = 'data:image/jpeg;base64,' + imageData;
      const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.remative_image.push(base64Image); // Push the image to the array
      
    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit() {

   // this.ionLoaderService.simpleLoader();
    
    this.userdetail.userdetails().subscribe((res) =>{
    console.log("userdetails-->",res);

    //this.ionLoaderService.dismissLoader();
      this.castes=res['response']['data'].castes;
      this.cities=res['response']['data'].cities;
      this.gotras=res['response']['data'].gotras;
      this.states=res['response']['data'].states;
      this.relations=res['response']['data'].relations;
      
      this.username=res['response']['data'].user.username;
      this.name=res['response']['data'].user.name;
      this.contact=res['response']['data'].user.contact;
      this.user_id=res['response']['data'].user.id;
      console.log('this.user_id ==> ',this.user_id);
      console.log('this.castes ==> ',this.castes);
      //this.username=res['data'].states;
    });


    this.shouldDisable=false;
    
  }

  save(userid){
    console.log('relative_names==>',JSON.stringify(this.relative_names));
    console.log('userid==>',userid);
    console.log('relative_wedding_anniversary_date HH==>',this.relative_wedding_anniversary_date);
    console.log('relative_ages HH==>',this.relative_ages);
    
    this.userdetail.savenormaluserdetail(this.name,this.username,this.fathers_name,this.relative_names,this.relative_ages,this.relative_statuses
     ,this.relative_past_dates,this.relative_contacts,this.relative_aadhaars,
      this.relative_relation_ids,this.relative_occupation_sectors,
      this.relative_occupation_departments,this.relative_occupation_names,
      this.relative_occupation_details,this.mothers_gotra,this.paternal_grandmothers_gotra
      ,this.maternal_grandmothers_gotra,this.contact,this.address,this.state_id,this.city_id,this.kuldevata,this.kuldevi,this.gotra_id,userid,this.dob,
      this.caste_id,this.occupation_sector,this.occupation_department,this.occupation_name,this.occupation_detail,this.remative_image,this.relative_wedding_anniversary_date,this.relative_birth_date).subscribe((res) =>{
      console.log("savedetail ==>",res);
    });
  }
  addRelative() {
    const newRelative = { username: '', age: '', status: '', pastDate: '', contactNumber: '', aadhaarNumber: '', relation: '', sector: '', department: '', occupation: '', detail: '' };
    this.relatives.push(newRelative);
  }
  

}





