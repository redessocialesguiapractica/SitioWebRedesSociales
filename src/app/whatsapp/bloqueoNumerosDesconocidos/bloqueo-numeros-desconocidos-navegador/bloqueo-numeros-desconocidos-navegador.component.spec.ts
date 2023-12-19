import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueoNumerosDesconocidosNavegadorComponent } from './bloqueo-numeros-desconocidos-navegador.component';

describe('BloqueoNumerosDesconocidosNavegadorComponent', () => {
  let component: BloqueoNumerosDesconocidosNavegadorComponent;
  let fixture: ComponentFixture<BloqueoNumerosDesconocidosNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloqueoNumerosDesconocidosNavegadorComponent]
    });
    fixture = TestBed.createComponent(BloqueoNumerosDesconocidosNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
