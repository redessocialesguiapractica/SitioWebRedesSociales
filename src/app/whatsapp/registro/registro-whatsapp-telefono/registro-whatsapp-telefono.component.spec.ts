import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroWhatsappTelefonoComponent } from './registro-whatsapp-telefono.component';

describe('RegistroWhatsappTelefonoComponent', () => {
  let component: RegistroWhatsappTelefonoComponent;
  let fixture: ComponentFixture<RegistroWhatsappTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroWhatsappTelefonoComponent]
    });
    fixture = TestBed.createComponent(RegistroWhatsappTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
