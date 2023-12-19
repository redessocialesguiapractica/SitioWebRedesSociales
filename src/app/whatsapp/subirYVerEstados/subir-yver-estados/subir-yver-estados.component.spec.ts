import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirYVerEstadosComponent } from './subir-yver-estados.component';

describe('SubirYVerEstadosComponent', () => {
  let component: SubirYVerEstadosComponent;
  let fixture: ComponentFixture<SubirYVerEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirYVerEstadosComponent]
    });
    fixture = TestBed.createComponent(SubirYVerEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
