import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroWhatsappNavegadorComponent } from './registro-whatsapp-navegador.component';

describe('RegistroWhatsappNavegadorComponent', () => {
  let component: RegistroWhatsappNavegadorComponent;
  let fixture: ComponentFixture<RegistroWhatsappNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroWhatsappNavegadorComponent]
    });
    fixture = TestBed.createComponent(RegistroWhatsappNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
