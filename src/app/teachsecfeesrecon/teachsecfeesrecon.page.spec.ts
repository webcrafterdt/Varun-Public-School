import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeachsecfeesreconPage } from './teachsecfeesrecon.page';

describe('TeachsecfeesreconfeesPage', () => {
  let component: TeachsecfeesreconPage;
  let fixture: ComponentFixture<TeachsecfeesreconPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachsecfeesreconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachsecfeesreconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
