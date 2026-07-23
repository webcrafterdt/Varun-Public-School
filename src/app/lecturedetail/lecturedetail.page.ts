import { Component, OnInit } from '@angular/core';
import { LactureService } from 'src/app/services/lacture.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-lecturedetail',
  templateUrl: './lecturedetail.page.html',
  styleUrls: ['./lecturedetail.page.scss'],
})
export class LecturedetailPage implements OnInit {
  lecturedetails:any=[];
  constructor(private lactureservice: LactureService,private router: Router,private route: ActivatedRoute,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {

    /*this.lecturedetails=[
      [
          [ [" Unit "], ["1"]  ],
          [ ["Main Topic"], [" Cell theory and concept of totipotency and pluripotency "] ],
          [ ["Sub Topic"], ["concept,totipotency and pluripotency of cell"] ],
          [ [" Completed On "], [" 10/10/2022"] ]
          
     ],
      [
        [ [" Unit "], ["1"]  ],
        [ ["Main Topic"], [" Cell theory and concept of totipotency and pluripotency "] ],
        [ ["Sub Topic"], ["concept,totipotency and pluripotency of cell"] ],
        [ [" Completed On "], [" 10/10/2022"] ]
   ],
   [
    [ [" Unit "], ["1"]  ],
    [ ["Main Topic"], [" Cell theory and concept of totipotency and pluripotency "] ],
    [ ["Sub Topic"], ["concept,totipotency and pluripotency of cell"] ],
    [ [" Completed On "], [" 10/10/2022"] ]
 ]
   ]*/
 
 
 console.log("sssssss-->",this.route.snapshot.paramMap.get('id'));
   const id =this.route.snapshot.paramMap.get('id');    
   this.ionLoaderService.simpleLoader();
    
 
   this.lactureservice.lacture_details(id).subscribe((res) =>{
    console.log('jai shreenath ji lacture results --> ',res);
    this.lecturedetails = res['lectureDetails'];
    console.log("this.lecturedetails---->",this.lecturedetails);
    this.ionLoaderService.dismissLoader();
  })
 // this.router.navigate(["home"]);
 
  }

}
