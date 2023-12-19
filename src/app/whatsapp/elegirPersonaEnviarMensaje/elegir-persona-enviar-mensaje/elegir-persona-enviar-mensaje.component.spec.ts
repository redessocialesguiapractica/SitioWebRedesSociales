import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirPersonaEnviarMensajeComponent } from './elegir-persona-enviar-mensaje.component';

describe('ElegirPersonaEnviarMensajeComponent', () => {
  let component: ElegirPersonaEnviarMensajeComponent;
  let fixture: ComponentFixture<ElegirPersonaEnviarMensajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElegirPersonaEnviarMensajeComponent]
    });
    fixture = TestBed.createComponent(ElegirPersonaEnviarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
