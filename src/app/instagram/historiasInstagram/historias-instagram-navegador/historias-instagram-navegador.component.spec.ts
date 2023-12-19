import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasInstagramNavegadorComponent } from './historias-instagram-navegador.component';

describe('HistoriasInstagramNavegadorComponent', () => {
  let component: HistoriasInstagramNavegadorComponent;
  let fixture: ComponentFixture<HistoriasInstagramNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriasInstagramNavegadorComponent]
    });
    fixture = TestBed.createComponent(HistoriasInstagramNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
