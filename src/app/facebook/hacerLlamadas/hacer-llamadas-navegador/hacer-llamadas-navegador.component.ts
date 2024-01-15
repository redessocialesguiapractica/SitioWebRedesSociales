import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hacer-llamadas-navegador',
  templateUrl: './hacer-llamadas-navegador.component.html',
  styleUrls: ['./hacer-llamadas-navegador.component.css']
})
export class HacerLlamadasNavegadorComponent implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) {}
  private nextInstructionTimer: any;
  private audioSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.repeatInstruction();
    this.setupNextInstructionTrigger();
  }
  
  audioInstruccionesData = [
    //PASO 7
    {
      index: 1,
      content: 'De igual manera al ser la primera llamada, te aparecerá un recuadro con la pregunta: ¿Permitir que Facebook grabe audio?, en el cual presionaremos la opción "Solo si la aplicación está en uso" señalado en el rectángulo rojo.',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_7.mp3',
    },
    //PASO 8
    {
      index: 2,
      content: 'Una vez confirmados todos los permisos de la aplicación, iniciará la llamada, espera a que la otra persona acepte la llamada. ',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_8.mp3',
    },
    //PASO 9
    {
      index: 3,
      content: 'Para finalizar la llamada pulsa el botón rojo que está siendo destacado.',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_9.mp3',
    },
    //PASO 10
    {
      index: 4,
      content: 'La aplicación te va a pedir calificar la calidad de la llamada si deseas hacerlo pulsa "Buena" o "Deficiente", caso contrario pulsa la opción "Cerrar" señalada en el recuadro rojo. ¡Y listo! Te esperamos en nuestro siguiente tutorial.',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_10.mp3',
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

  facebookLlamadasClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
}