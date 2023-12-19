import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarEnMuroNavegadorComponent } from './publicar-en-muro-navegador.component';

describe('PublicarEnMuroNavegadorComponent', () => {
  let component: PublicarEnMuroNavegadorComponent;
  let fixture: ComponentFixture<PublicarEnMuroNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarEnMuroNavegadorComponent]
    });
    fixture = TestBed.createComponent(PublicarEnMuroNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
