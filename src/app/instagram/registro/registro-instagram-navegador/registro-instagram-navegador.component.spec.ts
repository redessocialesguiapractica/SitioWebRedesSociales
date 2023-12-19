import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInstagramNavegadorComponent } from './registro-instagram-navegador.component';

describe('RegistroInstagramNavegadorComponent', () => {
  let component: RegistroInstagramNavegadorComponent;
  let fixture: ComponentFixture<RegistroInstagramNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInstagramNavegadorComponent]
    });
    fixture = TestBed.createComponent(RegistroInstagramNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
