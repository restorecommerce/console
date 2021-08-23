import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcAppComponent } from './app.component';

describe('AppBaseComponent', () => {
  let component: RcAppComponent;
  let fixture: ComponentFixture<RcAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
