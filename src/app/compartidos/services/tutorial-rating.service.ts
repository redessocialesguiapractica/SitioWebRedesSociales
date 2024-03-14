import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialRatingService {
  private apiUrl = 'http://localhost:3000/tutorialRatings'; // Adjust this URL according to your API endpoint

  constructor(private http: HttpClient) { }

  saveRating(tutorialId: string, rating: number): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { tutorialId, rating });
  }
}