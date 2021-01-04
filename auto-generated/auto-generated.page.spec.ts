import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoGeneratedPage } from './auto-generated.page';

describe('AutoGeneratedPage', () => {
  let component: AutoGeneratedPage;
  let fixture: ComponentFixture<AutoGeneratedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoGeneratedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoGeneratedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});