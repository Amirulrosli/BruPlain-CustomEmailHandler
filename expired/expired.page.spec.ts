import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpiredPage } from './expired.page';

describe('ExpiredPage', () => {
  let component: ExpiredPage;
  let fixture: ComponentFixture<ExpiredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
