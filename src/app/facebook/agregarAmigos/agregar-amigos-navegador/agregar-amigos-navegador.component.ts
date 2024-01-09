import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-amigos-navegador',
  templateUrl: './agregar-amigos-navegador.component.html',
  styleUrls: ['./agregar-amigos-navegador.component.css']
})
export class AgregarAmigosNavegadorComponent implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) {}
  private nextInstructionTimer: any;
  private audioSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.repeatInstruction();
    this.setupNextInstructionTrigger();
  }

  
  audioInstruccionesData = [
    {
      index: 1,
      content: '',
      audio: '',
    },
    {
      index: 2,
      content: '',
      audio: '',
    },
    {
      index: 3,
      content: '',
      audio: '',
    },
    {
      index: 4,
      content: '',
      audio: '',
    },
    {
      index: 5,
      content: 'A continuación se abrirá la pantalla Amigos en la que vamos a ver una lupa en la parte superior del teléfono, esta lupa nos va a permitir buscar amigos, presionamos la lupa dentro del cuadro rojo para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregarAmigos/agregar-amigos-paso-5.mp3',
    },
    {
      index: 6,
      content: '',
      audio: '',
    },
    {
      index: 7,
      content: '',
      audio: '',
    },
    {
      index: 8,
      content: '',
      audio: '',
    },
    {
      index: 9,
      content: '',
      audio: '',
    },
    {
      index: 10,
      content: '',
      audio: '',
    },
    {
      index: 11,
      content: '',
      audio: '',
    },
  ];
currentIndex=0;


onAudioInstruccionesButtonClick(buttonText: string): void {
  switch (buttonText) {
    case 'Anterior':
      this.previousInstruction();
      break;
    case 'Siguiente':
      this.nextInstruction();
      break;
    case 'Repetir':
      this.repeatInstruction();
      break;
    // Add more cases for other buttons or triggers as needed
  }
}

nextInstruction(): void {
  if (this.currentIndex < this.audioInstruccionesData.length - 1) {
    this.currentIndex++;
    this.clearNextInstructionTrigger(); // clear existing timer
    this.setupNextInstructionTrigger();
  }
}

previousInstruction(): void {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.clearNextInstructionTrigger(); // clear existing timer
    this.setupNextInstructionTrigger();
  }
}

repeatInstruction(): void {
  // Handle repeat logic if needed
}

setupNextInstructionTrigger(): void {
  // Clear any existing triggers
  this.clearNextInstructionTrigger();

  // Set up trigger based on current index
  switch (this.currentIndex) {
    case 0:
      // Set up a timer for the next step after 30 seconds
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 30000);
      break;
    // Add more cases for other steps
  }
}

ngOnDestroy() {
  // Unsubscribe to prevent memory leaks
  if (this.audioSubscription) {
    this.audioSubscription.unsubscribe();
  }

  // Clear any existing triggers
  this.clearNextInstructionTrigger();
}

clearNextInstructionTrigger(): void {
  // Clear any existing triggers, such as timers or event listeners
  // This will depend on the specific requirements for clearing triggers

  // Clear the timer if it's set
  if (this.nextInstructionTimer) {
    clearTimeout(this.nextInstructionTimer);
    this.nextInstructionTimer = null; // Reset the timer variable
  }
}

//Method for advancing to the next step
facebookAgregarAmigosClicked(): void {
  // Call the nextInstruction method or perform other actions specific to index 1
  this.nextInstruction();
}

    }