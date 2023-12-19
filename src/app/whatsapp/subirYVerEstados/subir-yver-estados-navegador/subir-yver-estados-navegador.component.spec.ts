import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirYVerEstadosNavegadorComponent } from './subir-yver-estados-navegador.component';

describe('SubirYVerEstadosNavegadorComponent', () => {
  let component: SubirYVerEstadosNavegadorComponent;
  let fixture: ComponentFixture<SubirYVerEstadosNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirYVerEstadosNavegadorComponent]
    });
    fixture = TestBed.createComponent(SubirYVerEstadosNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
