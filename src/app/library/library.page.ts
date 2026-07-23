import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  status:any;
  message:any;
  LibraryTransaction:any=[];
  constructor(private libraryservice: LibraryService,private router: Router,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
    this.ionLoaderService.simpleLoader();
    this.libraryservice.lib_transactions().subscribe((res) =>{
      console.log('library --> ',res);
      this.status = res['status'];
      this.message=res['message'];
      if(res['status'] == true)
      {

      
      
      this.LibraryTransaction = res['data']['Books'];
      //this.circulars_object = Object.keys(res['data']);
      console.log('this.LibraryTransaction ==>',this.LibraryTransaction);



      console.log('this.message ==>',this.message);
      
      this.status= res.status;
      console.log('this.status====>',this.status);
      }
      
      this.ionLoaderService.dismissLoader();
    });
   

  }

}
