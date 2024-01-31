import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-likes-instagram-navegador',
  templateUrl: './likes-instagram-navegador.component.html',
  styleUrls: ['./likes-instagram-navegador.component.css']
})
export class LikesInstagramNavegadorComponent implements OnInit{
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
      content:
        '¡Bienvenido a este tutorial guiado en el que aprenderás como dar likes en las publicaciones de Instagram! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
        audio: '/assets/audio/whatsapp/enviarMensajes/w-paso1.mp3',
    },
    {
      index: 2,
      content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Instagram.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso2.mp3',
    },
    {
      index: 3,
      content: 'Una vez que la aplicación se haya cargado, estarás en la página de inicio de Instagram, donde verás las publicaciones de las cuentas a las que sigues. Desliza hacia arriba para desplazarte por las publicaciones y encuentra la que te gustaría dar like. Presiona el ícono de corazón señalado en el cuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso3.mp3',
    },
    {
      index: 4,
      content: 'Verás que el corazón se vuelve rojo para indicar que has dado like a la publicación. Para ver las publicaciones a las que les has dado like recientemente, toca tu foto de perfil en la esquina inferior derecha, señalada con el cuadro rojo, para acceder a tu perfil.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso4.mp3',
    },
    {
      index: 5,
      content: 'Luego, toca el ícono de tres líneas horizontales en la esquina superior derecha, señalado con el cuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso5.mp3',
    },
    {
      index: 6,
      content: 'Para nuestro ejemplo en la barra de “Mensaje” escribe “Hola” desde tu teclado en el rectángulo rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso6.mp3',
    },
    {
      index: 7,
      content: 'Una vez escrito tu mensaje presiona el botón de “Enviar” que está señalado por el cuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso7.mp3',
    },
    {
      index: 8,
      content: 'Y se habrá enviado el mensaje a tu contacto. En la barra de mensajes también puedes ver el ícono de un clip, junto al ícono de la cámara. Presiona el clip que está siendo señalado por el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso8.mp3',
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
  instagramLikesClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
  
}
