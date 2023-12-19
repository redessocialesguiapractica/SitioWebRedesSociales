import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarEnMuroComponent } from './publicar-en-muro.component';

describe('PublicarEnMuroComponent', () => {
  let component: PublicarEnMuroComponent;
  let fixture: ComponentFixture<PublicarEnMuroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarEnMuroComponent]
    });
    fixture = TestBed.createComponent(PublicarEnMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
