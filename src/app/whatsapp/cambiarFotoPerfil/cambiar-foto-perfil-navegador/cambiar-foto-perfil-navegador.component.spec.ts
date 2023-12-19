import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarFotoPerfilNavegadorComponent } from './cambiar-foto-perfil-navegador.component';

describe('CambiarFotoPerfilNavegadorComponent', () => {
  let component: CambiarFotoPerfilNavegadorComponent;
  let fixture: ComponentFixture<CambiarFotoPerfilNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiarFotoPerfilNavegadorComponent]
    });
    fixture = TestBed.createComponent(CambiarFotoPerfilNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
