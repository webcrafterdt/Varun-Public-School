import { Component, OnInit,ViewChild  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { LactureService } from 'src/app/services/lacture.service';
import { Router } from "@angular/router";
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.page.html',
  styleUrls: ['./lecture.page.scss'],
})
export class LecturePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  name: string;
  message ="test this";
  dummyjso:any=[];
  detailjso:any=[];
  
  dummyjso1:any=[];
  constructor(private lactureservice: LactureService,private router: Router,private ionLoaderService: IonLoaderService) { 

    /*this.dummyjso=[
      {
        "0":"2021-22 - BSC (CBZ) - III YEAR",
        "1":"PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY",
        "2":"Dr. Mohnish Vyas",
        "3":"63",
        "4":"35",
      },
      {
        "0":"2021-22 - BSC (CBZ) - III YEAR",
        "1":"PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY",
        "2":"Dr. Mohnish Vyas",
        "3":"63",
        "4":"35",
      },
      {
        "0":"2021-22 - BSC (CBZ) - III YEAR",
        "1":"PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY",
        "2":"Dr. Mohnish Vyas",
        "3":"63",
        "4":"35",
      },
      {
        "0":"2021-22 - BSC (CBZ) - III YEAR",
        "1":"PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY",
        "2":"Dr. Mohnish Vyas",
        "3":"63",
        "4":"35",
      }
    ];*/
     this.dummyjso1=[
       [
           [ [" Course Name "], ["2021-22 - BSC (CBZ) - III YEAR"]  ],
           [ ["Semester"], [" 2021-22 - BSC (CBZ) - III YEAR PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY "] ],
           [ ["Sem"], ["I"] ],
           [ [" Faculty Name "], [" Dr. Kamlesh Gautam"] ],
           [ ["Total Lecture"], ["84"] ],
           [ ["Action"], [" 35 "] ]
      ],
       [
         [ [" Course Name "], ["2021-22 - BSC (CBZ) - III YEAR"]  ],
         [ ["Semester"], [" 2021-22 - BSC (CBZ) - III YEAR PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY "] ],
         [ ["Sem"], ["I"] ],
         [ [" Faculty Name "], [" Dr. Kamlesh Gautam"] ],
         [ ["Total Lecture"], ["84"] ],
         [ ["Action"], [" 35 "] ]
    ],
    [
       [ [" Course Name "], ["2021-22 - BSC (CBZ) - III YEAR"]  ],
       [ ["Semester"], [" 2021-22 - BSC (CBZ) - III YEAR PAPER III-PLANT BIOTECHNOLOGY AND MOLECULAR BIOLOGY "] ],
       [ ["Sem"], ["I"] ],
       [ [" Faculty Name "], [" Dr. Kamlesh Gautam"] ],
       [ ["Total Lecture"], ["84"] ],
       [ ["Action"], [" 35 "] ]
  ]
    ]
    console.log('jai shreenath ji 1111lacture results --> ',this.dummyjso);









   console.log('jai shreenath ji su results --> ',this.dummyjso);

    
  }
details(id)
{console.log("id---->",id);
  this.router.navigate(["/lecturedetail",id]);
}
  ngOnInit() {
    this.ionLoaderService.simpleLoader();
    
    this.lactureservice.view_lacture().subscribe((res) =>{
      console.log('jai shreenath ji lacture results --> ',res);
      this.dummyjso = res;
      this.ionLoaderService.dismissLoader();
    })
    //this.router.navigate(["home"]);

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
