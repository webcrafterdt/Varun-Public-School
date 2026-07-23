import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeachstufeesrecuntillPage } from './teachstufeesrecuntill.page';

describe('TeachstufeesrecuntillPage', () => {
  let component: TeachstufeesrecuntillPage;
  let fixture: ComponentFixture<TeachstufeesrecuntillPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachstufeesrecuntillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachstufeesrecuntillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
