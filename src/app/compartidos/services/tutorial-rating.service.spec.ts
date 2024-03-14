import { TestBed } from '@angular/core/testing';

import { TutorialRatingService } from './tutorial-rating.service';

describe('TutorialRatingService', () => {
  let service: TutorialRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
