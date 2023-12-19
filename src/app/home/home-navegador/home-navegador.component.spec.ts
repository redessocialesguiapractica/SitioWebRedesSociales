import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavegadorComponent } from './home-navegador.component';

describe('HomeNavegadorComponent', () => {
  let component: HomeNavegadorComponent;
  let fixture: ComponentFixture<HomeNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNavegadorComponent]
    });
    fixture = TestBed.createComponent(HomeNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
