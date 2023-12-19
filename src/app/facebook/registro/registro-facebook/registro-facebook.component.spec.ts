import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFacebookComponent } from './registro-facebook.component';

describe('RegistroFacebookComponent', () => {
  let component: RegistroFacebookComponent;
  let fixture: ComponentFixture<RegistroFacebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFacebookComponent]
    });
    fixture = TestBed.createComponent(RegistroFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
