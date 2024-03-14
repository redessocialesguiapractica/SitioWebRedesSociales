import { Component, Input } from '@angular/core';
import { TutorialRatingService } from '../services/tutorial-rating.service';

@Component({
  selector: 'app-tutorial-rating',
  templateUrl: './tutorial-rating.component.html',
  styleUrls: ['./tutorial-rating.component.css']
})
export class TutorialRatingComponent {
  @Input() tutorialId!: string; // Change type to string
  isRatingSelected: boolean = false;

  constructor(private tutorialRatingService: TutorialRatingService) { }

  rateTutorial(rating: number): void {
    this.tutorialRatingService.saveRating(this.tutorialId, rating).subscribe(() => {
      console.log('Rating saved successfully.');
      this.isRatingSelected = true; // Set the flag to true when rating is selected
    }, error => {
      console.error('Error saving rating:', error);
      // Handle error, such as displaying an error message to the user
    });
  }
}