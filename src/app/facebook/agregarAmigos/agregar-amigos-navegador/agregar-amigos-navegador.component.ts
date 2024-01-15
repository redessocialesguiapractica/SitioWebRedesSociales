import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-amigos-navegador',
  templateUrl: './agregar-amigos-navegador.component.html',
  styleUrls: ['./agregar-amigos-navegador.component.css'],
})
export class AgregarAmigosNavegadorComponent {
  constructor(private cdRef: ChangeDetectorRef) {}
  private nextInstructionTimer: any;
  private audioSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.repeatInstruction();
    this.setupNextInstructionTrigger();
  }
  audioInstruccionesData = [
    {
      index: 1, // Este es el paso 3
      content:
        'Una vez abierta la aplicación de Facebook, presionaremos el círculo pequeño con nuestra foto de perfil que se encuentra dentro del cuadro rojo. Presiona el círculo para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_3.mp3',
    },
    {
      index: 2, // Este es el paso 10
      content:
        'Si por alguna razón deseas cancelar la solicitud de amistad enviada, debes presionar el botón "Cancelar" señalado en el recuadro rojo.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_10.mp3',
    },
    {
      index: 3, // Este es el paso 11
      content:
        'Te aparecerá un recuadro con la pregunta "¿Cancelar la solicitud de amistad?" con las opciones "CERRAR" y "CANCELAR SOLICITUD", presiona la opción "CANCELAR SOLICITUD" para que elimines la solicitud de amistad enviada a esa persona. ¡Y listo! Te esperamos en nuestro siguiente tutorial.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_11.mp3',
    },
  ];
  currentIndex = 0;

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
  agregarAmigosRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
}
