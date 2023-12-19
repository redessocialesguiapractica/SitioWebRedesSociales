import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFacebookNavegadorComponent } from './registro-facebook-navegador.component';

describe('RegistroFacebookNavegadorComponent', () => {
  let component: RegistroFacebookNavegadorComponent;
  let fixture: ComponentFixture<RegistroFacebookNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFacebookNavegadorComponent]
    });
    fixture = TestBed.createComponent(RegistroFacebookNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
