import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerYRecibirLlamadasNavegadorComponent } from './hacer-yrecibir-llamadas-navegador.component';

describe('HacerYRecibirLlamadasNavegadorComponent', () => {
  let component: HacerYRecibirLlamadasNavegadorComponent;
  let fixture: ComponentFixture<HacerYRecibirLlamadasNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HacerYRecibirLlamadasNavegadorComponent]
    });
    fixture = TestBed.createComponent(HacerYRecibirLlamadasNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
