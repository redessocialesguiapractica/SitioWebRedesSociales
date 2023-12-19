import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMensajesNavegadorComponent } from './enviar-mensajes-navegador.component';

describe('EnviarMensajesNavegadorComponent', () => {
  let component: EnviarMensajesNavegadorComponent;
  let fixture: ComponentFixture<EnviarMensajesNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviarMensajesNavegadorComponent]
    });
    fixture = TestBed.createComponent(EnviarMensajesNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
