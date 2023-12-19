import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueoNumerosDesconocidosComponent } from './bloqueo-numeros-desconocidos.component';

describe('BloqueoNumerosDesconocidosComponent', () => {
  let component: BloqueoNumerosDesconocidosComponent;
  let fixture: ComponentFixture<BloqueoNumerosDesconocidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloqueoNumerosDesconocidosComponent]
    });
    fixture = TestBed.createComponent(BloqueoNumerosDesconocidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
