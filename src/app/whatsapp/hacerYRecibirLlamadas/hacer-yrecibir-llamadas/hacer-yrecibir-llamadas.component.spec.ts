import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerYRecibirLlamadasComponent } from './hacer-yrecibir-llamadas.component';

describe('HacerYRecibirLlamadasComponent', () => {
  let component: HacerYRecibirLlamadasComponent;
  let fixture: ComponentFixture<HacerYRecibirLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HacerYRecibirLlamadasComponent]
    });
    fixture = TestBed.createComponent(HacerYRecibirLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
