import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInstagramComponent } from './busqueda-instagram.component';

describe('BusquedaInstagramComponent', () => {
  let component: BusquedaInstagramComponent;
  let fixture: ComponentFixture<BusquedaInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaInstagramComponent]
    });
    fixture = TestBed.createComponent(BusquedaInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
