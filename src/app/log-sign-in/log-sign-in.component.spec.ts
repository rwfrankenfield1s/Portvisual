import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSignInComponent } from './log-sign-in.component';

describe('LogSignInComponent', () => {
  let component: LogSignInComponent;
  let fixture: ComponentFixture<LogSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
