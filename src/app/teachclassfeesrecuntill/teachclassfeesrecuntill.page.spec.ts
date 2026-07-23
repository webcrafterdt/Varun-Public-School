import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeachclassfeesrecuntillPage } from './teachclassfeesrecuntill.page';

describe('TeachclassfeesrecuntillPage', () => {
  let component: TeachclassfeesrecuntillPage;
  let fixture: ComponentFixture<TeachclassfeesrecuntillPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachclassfeesrecuntillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachclassfeesrecuntillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
