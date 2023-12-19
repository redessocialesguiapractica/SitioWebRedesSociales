import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarFotoPerfilComponent } from './cambiar-foto-perfil.component';

describe('CambiarFotoPerfilComponent', () => {
  let component: CambiarFotoPerfilComponent;
  let fixture: ComponentFixture<CambiarFotoPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiarFotoPerfilComponent]
    });
    fixture = TestBed.createComponent(CambiarFotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
