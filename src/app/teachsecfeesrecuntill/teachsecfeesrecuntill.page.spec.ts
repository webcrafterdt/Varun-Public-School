import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeachsecfeesrecuntillPage } from './teachsecfeesrecuntill.page';

describe('TeachsecfeesrecuntillfeesPage', () => {
  let component: TeachsecfeesrecuntillPage;
  let fixture: ComponentFixture<TeachsecfeesrecuntillPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachsecfeesrecuntillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachsecfeesrecuntillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
