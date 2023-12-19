import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroWhatsappComponent } from './registro-whatsapp.component';

describe('RegistroWhatsappComponent', () => {
  let component: RegistroWhatsappComponent;
  let fixture: ComponentFixture<RegistroWhatsappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroWhatsappComponent]
    });
    fixture = TestBed.createComponent(RegistroWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
