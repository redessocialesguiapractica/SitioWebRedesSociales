import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeNavegadorComponent } from './acerca-de-navegador.component';

describe('AcercaDeNavegadorComponent', () => {
  let component: AcercaDeNavegadorComponent;
  let fixture: ComponentFixture<AcercaDeNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaDeNavegadorComponent]
    });
    fixture = TestBed.createComponent(AcercaDeNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
