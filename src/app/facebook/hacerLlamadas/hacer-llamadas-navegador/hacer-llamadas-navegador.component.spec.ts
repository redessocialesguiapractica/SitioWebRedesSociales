import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerLlamadasNavegadorComponent } from './hacer-llamadas-navegador.component';

describe('HacerLlamadasNavegadorComponent', () => {
  let component: HacerLlamadasNavegadorComponent;
  let fixture: ComponentFixture<HacerLlamadasNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HacerLlamadasNavegadorComponent]
    });
    fixture = TestBed.createComponent(HacerLlamadasNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
