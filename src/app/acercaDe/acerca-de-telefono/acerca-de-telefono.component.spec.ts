import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeTelefonoComponent } from './acerca-de-telefono.component';

describe('AcercaDeTelefonoComponent', () => {
  let component: AcercaDeTelefonoComponent;
  let fixture: ComponentFixture<AcercaDeTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaDeTelefonoComponent]
    });
    fixture = TestBed.createComponent(AcercaDeTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
