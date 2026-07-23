import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { RegisterService } from 'src/app/services/register.service';
import {  MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { ToastService } from 'src/app/services/toast.service';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { HttpClient ,HttpEventType,HttpHeaders,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public name   = '';
  public username = '';
  public contact = '';
  public password = '';
  public type = '';
  
  urllink:any;
  shouldDisable:any=[];
  downloadUrl:any;
  checkboxes: { id: number; checked: boolean; }[] = [];

  constructor(private navCtrl: NavController,private router: Router,private registerservice: RegisterService,public menuCtrl: MenuController,
    private storage: StorageService,private ionLoaderService: IonLoaderService,private toastservice: ToastService,
    private http: HttpClient ) { 
    this.menuCtrl.enable(false);

  ///  this.urllink='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    this.shouldDisable=false;

   
  }
  
  registeruser()
  {
    console.log('name ==> ',this.name);
    console.log('username ==> ',this.username);
    console.log('contact ==> ',this.contact);
    console.log('password ==> ',this.password);
    console.log('type ==> ',this.type);


    this.ionLoaderService.simpleLoader();
    
    this.registerservice.register(this.name,this.username,this.contact,this.password,this.type).subscribe((res) =>{
      console.log('jai shreenath ji > ',res);
      if(res['error'] == false)
      {
      localStorage.setItem('userdetails', res['response']['data'].id);
      if(res['response']['data'].type == 2)
      {
        this.router.navigate(["/normaluserform"]);
      }
      else if(res['response']['data'].type == 3) 
      {
        this.router.navigate(["/mahatmaform"]);
      }
      
      this.toastservice.presentToast(res['response']['message']);
      this.ionLoaderService.dismissLoader();
      }
      else{
        this.toastservice.presentToast(res['response']['message']);
        this.ionLoaderService.dismissLoader();
      }
      
      
      
    },(error) =>{
      this.ionLoaderService.dismissLoader();  
      console.log("xcxcxcxcxcxc");
      this.toastservice.presentToast('Something Went Wrong');
    }
    )
  }


  
  ngOnInit() {
    this.shouldDisable=false;
  }



  

}

