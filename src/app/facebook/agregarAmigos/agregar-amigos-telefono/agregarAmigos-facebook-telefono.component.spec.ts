import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAmigosFacebookTelefonoComponent } from './agregarAmigos-facebook-telefono.component';

describe('RegistroFacebookTelefonoComponent', () => {
  let component: AgregarAmigosFacebookTelefonoComponent;
  let fixture: ComponentFixture<AgregarAmigosFacebookTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAmigosFacebookTelefonoComponent]
    });
    fixture = TestBed.createComponent(AgregarAmigosFacebookTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
