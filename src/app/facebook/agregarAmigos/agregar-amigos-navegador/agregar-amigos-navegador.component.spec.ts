import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAmigosNavegadorComponent } from './agregar-amigos-navegador.component';

describe('AgregarAmigosNavegadorComponent', () => {
  let component: AgregarAmigosNavegadorComponent;
  let fixture: ComponentFixture<AgregarAmigosNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAmigosNavegadorComponent]
    });
    fixture = TestBed.createComponent(AgregarAmigosNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
