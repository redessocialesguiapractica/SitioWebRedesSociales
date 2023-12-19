import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFacebookNavegadorComponent } from './login-facebook-navegador.component';

describe('LoginFacebookNavegadorComponent', () => {
  let component: LoginFacebookNavegadorComponent;
  let fixture: ComponentFixture<LoginFacebookNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFacebookNavegadorComponent]
    });
    fixture = TestBed.createComponent(LoginFacebookNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
