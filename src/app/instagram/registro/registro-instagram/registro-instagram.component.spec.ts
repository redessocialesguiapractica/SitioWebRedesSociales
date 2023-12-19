import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInstagramComponent } from './registro-instagram.component';

describe('RegistroInstagramComponent', () => {
  let component: RegistroInstagramComponent;
  let fixture: ComponentFixture<RegistroInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInstagramComponent]
    });
    fixture = TestBed.createComponent(RegistroInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
