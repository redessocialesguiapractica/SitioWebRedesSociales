import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionInstagramComponent } from './barra-navegacion-instagram.component';

describe('BarraNavegacionInstagramComponent', () => {
  let component: BarraNavegacionInstagramComponent;
  let fixture: ComponentFixture<BarraNavegacionInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraNavegacionInstagramComponent]
    });
    fixture = TestBed.createComponent(BarraNavegacionInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
