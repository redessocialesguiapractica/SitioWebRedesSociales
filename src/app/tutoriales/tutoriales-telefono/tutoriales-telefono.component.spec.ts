import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesTelefonoComponent } from './tutoriales-telefono.component';

describe('TutorialesTelefonoComponent', () => {
  let component: TutorialesTelefonoComponent;
  let fixture: ComponentFixture<TutorialesTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialesTelefonoComponent]
    });
    fixture = TestBed.createComponent(TutorialesTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
