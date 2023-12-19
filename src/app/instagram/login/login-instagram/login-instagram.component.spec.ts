import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstagramComponent } from './login-instagram.component';

describe('LoginInstagramComponent', () => {
  let component: LoginInstagramComponent;
  let fixture: ComponentFixture<LoginInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInstagramComponent]
    });
    fixture = TestBed.createComponent(LoginInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
