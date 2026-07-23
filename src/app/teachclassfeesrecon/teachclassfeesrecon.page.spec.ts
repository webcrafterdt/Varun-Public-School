import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeachclassfeesreconPage } from './teachclassfeesrecon.page';

describe('TeachclassfeesreconPage', () => {
  let component: TeachclassfeesreconPage;
  let fixture: ComponentFixture<TeachclassfeesreconPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachclassfeesreconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachclassfeesreconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
