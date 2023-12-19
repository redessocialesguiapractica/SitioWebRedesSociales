import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstagramNavegadorComponent } from './login-instagram-navegador.component';

describe('LoginInstagramNavegadorComponent', () => {
  let component: LoginInstagramNavegadorComponent;
  let fixture: ComponentFixture<LoginInstagramNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInstagramNavegadorComponent]
    });
    fixture = TestBed.createComponent(LoginInstagramNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
