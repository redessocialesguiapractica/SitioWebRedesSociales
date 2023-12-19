import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAmigosComponent } from './agregar-amigos.component';

describe('AgregarAmigosComponent', () => {
  let component: AgregarAmigosComponent;
  let fixture: ComponentFixture<AgregarAmigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAmigosComponent]
    });
    fixture = TestBed.createComponent(AgregarAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
