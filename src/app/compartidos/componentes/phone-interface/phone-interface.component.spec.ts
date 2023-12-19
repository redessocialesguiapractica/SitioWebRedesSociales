import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInterfaceComponent } from './phone-interface.component';

describe('PhoneInterfaceComponent', () => {
  let component: PhoneInterfaceComponent;
  let fixture: ComponentFixture<PhoneInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneInterfaceComponent]
    });
    fixture = TestBed.createComponent(PhoneInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
