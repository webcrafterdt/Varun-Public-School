import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiomatricattcalenderPage } from './biomatricattcalender.page';

describe('BiomatricattcalenderPage', () => {
  let component: BiomatricattcalenderPage;
  let fixture: ComponentFixture<BiomatricattcalenderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BiomatricattcalenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiomatricattcalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
