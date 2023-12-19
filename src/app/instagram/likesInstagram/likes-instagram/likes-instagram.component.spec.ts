import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesInstagramComponent } from './likes-instagram.component';

describe('LikesInstagramComponent', () => {
  let component: LikesInstagramComponent;
  let fixture: ComponentFixture<LikesInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikesInstagramComponent]
    });
    fixture = TestBed.createComponent(LikesInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
