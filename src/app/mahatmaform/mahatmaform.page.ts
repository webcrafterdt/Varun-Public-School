import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
@Component({
  selector: 'app-mahatmaform',
  templateUrl: './mahatmaform.page.html',
  styleUrls: ['./mahatmaform.page.scss'],
})
export class MahatmaformPage implements OnInit {
  
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
  base64Image:any;
  castes:any=[];
  cities:any=[];
  gotras:any=[];
  akhadas:any=[];
  padavis:any=[];
  states:any=[];
  username:any;
  checkboxes: { id: number; checked: boolean; }[] = [];
  name:any;
  contact:any;
  
  registration_id:any;
  mahatma_name:any;
  fathers_name:any;
  permanent_address:any;
  temporary_address:any;
  mahatma_contact:any;
  voter_id:any;
  aadhaar_id:any;
  dob:any;
  birth_religion:any;
  birthplace:any;
  birthstate:any;
  monk_date:any;
  marital_status:any;
  ashram:any;
  initiation_place:any;
  education:any;
  initiation:any;
  gurus_name:any;
  gurus_address:any;
  gurus_location:any;
  facebook:any;
  instagram:any;
  youtube:any;
  whatsapp:any;
  website:any;
  mahatma_category:any;
  sect:any;
  arena:any;
  description:any;
  service_name:any=[];
  service_price:any=[];
  service_note:any=[];
  user_id:any;
  mahatmapoto:any;
  constructor(private navCtrl: NavController,private router: Router,private loginservice: LoginService,public menuCtrl: MenuController,
    private storage: StorageService,private ionLoaderService: IonLoaderService,private toastservice: ToastService,
    private http: HttpClient,private camera:Camera,private userdetail: UserdetailService ) { 
    this.menuCtrl.enable(false);

  ///  this.urllink='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    this.shouldDisable=false;


    
   // this.downloadFile(this.urllink);
   for(let i=0; i<12; i++) {
  this.checkboxes.push({ id: i, checked: false });
}
  }

  
  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
      //this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.mahatmapoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  getStorage() {
   // this.storage.getObject('stdetails').then((data: any) => {
      //this.person = data;
    //});
  }
  

  register()
  {
    this.router.navigate(['/register'])
  }


  ionViewDidEnter()
  {
    //this.ionLoaderService.dismissLoader();

    
  }
  
  ngOnInit() {
    this.userdetail.mahatmadetails().subscribe((res) =>{
      console.log("userdetails-->",res);
  
      //this.ionLoaderService.dismissLoader();
        this.castes=res['response']['data'].castes;
        this.cities=res['response']['data'].cities;
        this.gotras=res['response']['data'].gotras;
        this.akhadas=res['response']['data'].akhadas;
        this.padavis=res['response']['data'].padavis;
        
        this.states=res['response']['data'].states;
        this.username=res['response']['data'].user.username;
        this.name=res['response']['data'].user.name;
        this.contact=res['response']['data'].user.contact;
        this.user_id=res['response']['data'].user.id;
        console.log('this.user_id ==>',this.user_id);
        console.log('this.castes ==> ',this.castes);
  
        //this.username=res['data'].states;
  
      });
    this.shouldDisable=false;
  }

  //https://sanatanyug.org/api/store-action=mahatma-detail

  save(userid){
    this.userdetail.savemahatmadetail(this.registration_id,this.name,this.fathers_name,this.permanent_address,this.temporary_address,
      this.contact,this.voter_id,this.aadhaar_id,this.dob,this.birth_religion,this.birthplace,this.birthstate,this.monk_date,
      this.marital_status,this.ashram,this.initiation_place,this.education,this.initiation,this.gurus_name,this.gurus_address,
      this.gurus_location,this.facebook,this.instagram,this.youtube,this.whatsapp,this.website,this.mahatma_category,
      this.sect,this.arena,this.description,this.service_name,this.service_price,this.service_note,this.mahatmapoto).subscribe((res) =>{
      console.log("mahatma save result ==>",res);
    });
  }


  services: any[] = []; // array to store the relative data

  addRelative() {
    const newRelative = { username: '', age: '', status: '', pastDate: '', contactNumber: '', aadhaarNumber: '', relation: '', sector: '', department: '', occupation: '', detail: '' };
    this.services.push(newRelative);
  }
}
