import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFacebookTelefonoComponent } from './registro-facebook-telefono.component';

describe('RegistroFacebookTelefonoComponent', () => {
  let component: RegistroFacebookTelefonoComponent;
  let fixture: ComponentFixture<RegistroFacebookTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFacebookTelefonoComponent]
    });
    fixture = TestBed.createComponent(RegistroFacebookTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
