import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInstagramTelefonoComponent } from './registro-instagram-telefono.component';

describe('RegistroInstagramTelefonoComponent', () => {
  let component: RegistroInstagramTelefonoComponent;
  let fixture: ComponentFixture<RegistroInstagramTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInstagramTelefonoComponent]
    });
    fixture = TestBed.createComponent(RegistroInstagramTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
