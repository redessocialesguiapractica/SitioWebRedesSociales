import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-audio-instrucciones',
  templateUrl: './audio-instrucciones.component.html',
  styleUrls: ['./audio-instrucciones.component.css']
})
export class AudioInstruccionesComponent implements OnInit, OnChanges {
  @Input() maxIndex: number | undefined;
  @Input() index: number | undefined;
  @Input() content: string | undefined;
  @Input() audioSrc: string | undefined; // New input for audio source
  @Input() buttonTexts: string[] | undefined;
  @Output() buttonClick = new EventEmitter<string>();

  audio: HTMLAudioElement | undefined;

  ngOnInit() {
    this.initializeAudio();
    this.playAudio(); // Play audio when component is initialized
  }

  ngOnChanges(changes: SimpleChanges) {
    // Reinitialize audio when audioSrc or index changes
    if ((changes['audioSrc'] || changes['index']) && !changes['audioSrc'].firstChange) {
      this.initializeAudio();
      this.playAudio();
    }
  }

  initializeAudio() {
    // Pause and unload the previous audio if it exists
    if (this.audio) {
      this.audio.pause();
      this.audio = undefined;
    }
  
    // Initialize audio element
    if (this.audioSrc) {
      this.audio = new Audio(this.audioSrc);
      this.audio.load(); // Load the audio
  
      // Use canplaythrough event to play audio when it's fully loaded
      this.audio.addEventListener('canplaythrough', () => {
        this.playAudio();
      });
    }
  }
  onButtonClick(text: string): void {
    this.buttonClick.emit(text);

    // Play audio when button is clicked
    if (text === 'Siguiente' || text === 'Anterior' || text === 'Repetir') {
      this.playAudio();
    }
  }

  playAudio() {
    if (this.audio) {
      // Check if the audio is loaded before playing
      if (this.audio.readyState >= 2) {
        this.audio.play();
      } else {
        // If audio is not loaded, wait for it to load and then play
        this.audio.addEventListener('loadeddata', () => {
          this.audio?.play();
        });
      }
    }
  }
  ngOnDestroy() {
    // Stop audio when the component is destroyed
    this.stopAudio();
  }

  stopAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio = undefined;
    }
  }
  
  
}