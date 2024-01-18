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
    {
      index: 1,
      content: '¡Bienvenido a este tutorial guiado para hacer llamadas en Facebook! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces comencemos.',
      audio: '/assets/audio/facebook/llamadas/paso_1.mp3',
    },
    {
      index: 2,
      content: 'En tu celular abre la aplicación de Facebook y asegurate de haber iniciado sesión, para poder visualizar la pantalla principal, en la cual vamos a presionar el ícono de mensaje señalado en el recuadro rojo. Presiona el ícono de mensaje.',
      audio: '/assets/audio/facebook/llamadas/paso_2.mp3',
    },
    {
      index: 3,
      content: 'Se abrirá la ventana de "Chats" en la que podemos visualizar una barra de búsqueda con el texto "Buscar". Por favor, escribe el nombre de tu amigo de facebook a quien deseas llamar dentro del recuadro señalado. Para nuestro ejemplo puedes escribir "Eli" desde tu teclado.',
      audio: '/assets/audio/facebook/llamadas/paso_3.mp3',
    },
    {
      index: 4,
      content: 'Te aparecerán las opciones relacionadas a tu búsqueda, busca a tu amigo y presiona su nombre. Para nuestro ejemplo elegimos a "Eli Alarcón". Presiona la opción indicada en el rectángulo rojo.',
      audio: '/assets/audio/facebook/llamadas/paso_4.mp3',
    },
    {
      index: 5,
      content: 'Se abrirá la ventana de chat con tu amigo, en la que vamos a visualizar el botón de teléfono señalado con el rectángulo rojo. Presiona el boton de teléfono para poder llamar a tu amigo.',
      audio: '/assets/audio/facebook/llamadas/paso_5.mp3',
    },
    {
      index: 6,
      content: 'De igual manera al ser la primera llamada, te aparecerá un recuadro con la pregunta: ¿Permitir que Facebook grabe audio?, en el cual presionaremos la opción "Solo si la aplicación está en uso" señalado en el rectángulo rojo.',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_7.mp3',
    },
    {
      index: 7,
      content: 'Una vez confirmados todos los permisos de la aplicación, iniciará la llamada, espera a que la otra persona acepte la llamada. ',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_8.mp3',
    },
    {
      index: 8,
      content: 'Para finalizar la llamada pulsa el botón rojo que está siendo destacado.',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_9.mp3',
    },
    {
      index: 9,
      content: 'La aplicación te va a pedir calificar la calidad de la llamada si deseas hacerlo pulsa "Buena" o "Deficiente", caso contrario pulsa la opción "Cerrar" señalada en el recuadro rojo. ¡Y listo! Te esperamos en nuestro siguiente tutorial.',
      audio: '/assets/audio/facebook/hacer_llamadas/paso_10.mp3',
    },
    // Add more objects with different content as needed
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
