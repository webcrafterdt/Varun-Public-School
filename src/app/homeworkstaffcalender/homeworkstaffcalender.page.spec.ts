import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeworkstaffcalenderPage } from './homeworkstaffcalender.page';

describe('HomeworkstaffcalenderPage', () => {
  let component: HomeworkstaffcalenderPage;
  let fixture: ComponentFixture<HomeworkstaffcalenderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkstaffcalenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworkstaffcalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
