import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerLlamadasComponent } from './hacer-llamadas.component';

describe('HacerLlamadasComponent', () => {
  let component: HacerLlamadasComponent;
  let fixture: ComponentFixture<HacerLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HacerLlamadasComponent]
    });
    fixture = TestBed.createComponent(HacerLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
