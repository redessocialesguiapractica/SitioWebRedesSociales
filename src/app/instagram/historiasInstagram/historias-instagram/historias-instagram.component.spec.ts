import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasInstagramComponent } from './historias-instagram.component';

describe('HistoriasInstagramComponent', () => {
  let component: HistoriasInstagramComponent;
  let fixture: ComponentFixture<HistoriasInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriasInstagramComponent]
    });
    fixture = TestBed.createComponent(HistoriasInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
