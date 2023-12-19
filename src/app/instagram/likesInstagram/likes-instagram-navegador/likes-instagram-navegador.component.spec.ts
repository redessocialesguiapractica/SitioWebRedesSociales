import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesInstagramNavegadorComponent } from './likes-instagram-navegador.component';

describe('LikesInstagramNavegadorComponent', () => {
  let component: LikesInstagramNavegadorComponent;
  let fixture: ComponentFixture<LikesInstagramNavegadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikesInstagramNavegadorComponent]
    });
    fixture = TestBed.createComponent(LikesInstagramNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
