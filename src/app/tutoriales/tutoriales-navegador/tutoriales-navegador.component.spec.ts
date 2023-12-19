import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesNavegadorComponent } from './tutoriales-navegador.component';

describe('TutorialesNavegadorComponent', () => {
  let component: TutorialesNavegadorComponent;
  let fixture: ComponentFixture<TutorialesNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialesNavegadorComponent]
    });
    fixture = TestBed.createComponent(TutorialesNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
