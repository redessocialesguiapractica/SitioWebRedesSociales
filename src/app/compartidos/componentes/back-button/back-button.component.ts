import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnDestroy {
  private audioSubscription: Subscription | undefined;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();

    // Stop audio when going back
    if (this.audioSubscription) {
      this.audioSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.audioSubscription) {
      this.audioSubscription.unsubscribe();
    }
  }
}