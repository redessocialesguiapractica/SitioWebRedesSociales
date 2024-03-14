import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialRatingComponent } from './tutorial-rating.component';

describe('TutorialRatingComponent', () => {
  let component: TutorialRatingComponent;
  let fixture: ComponentFixture<TutorialRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialRatingComponent]
    });
    fixture = TestBed.createComponent(TutorialRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
