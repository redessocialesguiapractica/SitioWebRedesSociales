import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTelefonoComponent } from './home-telefono.component';

describe('HomeTelefonoComponent', () => {
  let component: HomeTelefonoComponent;
  let fixture: ComponentFixture<HomeTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTelefonoComponent]
    });
    fixture = TestBed.createComponent(HomeTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
