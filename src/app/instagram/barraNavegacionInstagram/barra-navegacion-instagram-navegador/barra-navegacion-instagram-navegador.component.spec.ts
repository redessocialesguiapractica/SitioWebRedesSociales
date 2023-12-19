import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionInstagramNavegadorComponent } from './barra-navegacion-instagram-navegador.component';

describe('BarraNavegacionInstagramNavegadorComponent', () => {
  let component: BarraNavegacionInstagramNavegadorComponent;
  let fixture: ComponentFixture<BarraNavegacionInstagramNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraNavegacionInstagramNavegadorComponent]
    });
    fixture = TestBed.createComponent(BarraNavegacionInstagramNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
