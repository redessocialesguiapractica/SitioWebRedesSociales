import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirPersonaEnviarMensajeNavegadorComponent } from './elegir-persona-enviar-mensaje-navegador.component';

describe('ElegirPersonaEnviarMensajeNavegadorComponent', () => {
  let component: ElegirPersonaEnviarMensajeNavegadorComponent;
  let fixture: ComponentFixture<ElegirPersonaEnviarMensajeNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElegirPersonaEnviarMensajeNavegadorComponent]
    });
    fixture = TestBed.createComponent(ElegirPersonaEnviarMensajeNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
