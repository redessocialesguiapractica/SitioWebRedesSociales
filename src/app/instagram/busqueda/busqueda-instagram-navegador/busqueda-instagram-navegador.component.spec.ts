import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInstagramNavegadorComponent } from './busqueda-instagram-navegador.component';

describe('BusquedaInstagramNavegadorComponent', () => {
  let component: BusquedaInstagramNavegadorComponent;
  let fixture: ComponentFixture<BusquedaInstagramNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaInstagramNavegadorComponent]
    });
    fixture = TestBed.createComponent(BusquedaInstagramNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
