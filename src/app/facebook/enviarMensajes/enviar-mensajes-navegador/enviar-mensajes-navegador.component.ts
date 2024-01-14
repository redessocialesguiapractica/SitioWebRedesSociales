import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enviar-mensajes-navegador',
  templateUrl: './enviar-mensajes-navegador.component.html',
  styleUrls: ['./enviar-mensajes-navegador.component.css'],
})
export class EnviarMensajesNavegadorComponent implements OnInit {
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
        '¡Bienvenido a este tutorial guiado para enviar mensajes a tus amigos en Facebook! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos.',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_1.mp3',
    },
    {
      index: 2,
      content:
        'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Facebook para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_2.mp3',
    },
    {
      index: 3,
      content:
        'Una vez abierta la aplicación de Facebook, vamos a presionar el ícono de mensaje señalado en el recuadro rojo. Presiona el ícono de mensaje para continuar.',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_3.mp3',
    },
    {
      index: 4,
      content:
        'Se nos abrirá nuestra ventana de Chats, en la que podemos visualizar una barra de búsqueda, la cual presionaremos para continuar con el siguente paso',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_4.mp3',
    },
    {
      index: 5,
      content:
        'En la barra de busqueda escribe el nombre de tu amigo de facebook a quien deseas enviar un mensaje. Para nuestro ejemplo puedes escribir "itsqmet" desde tu teclado.',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_5.mp3',
    },
    {
      index: 6,
      content:
        'Te apareceran las opciones relacionadas a tu búsqueda, busca a tu amigo y presiona su nombre. Para nuestro ejemplo elegimos a "Itsqmet Vinculación". Presiona la opción indicada en el rectángulo rojo. ',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_6.mp3',
    },
    {
      index: 7,
      content:
        'Se abrirá la ventana de chat con tu amigo, en la que vamos a visualizar la barra de texto, señalada en el rectángulo rojo, para poder insertar el mensaje que deseamos enviar. Presiona la barra de texto para poder insertar tu mensaje.',
      audio: '/assets/audio/facebook/enviar_mensajes/paso_7.mp3',
    },
    {
      index: 8,
      content:
        'Te aparecerá una barra con el texto: "Escribe un mensaje", aquí vamos a escribir el mensaje que deseamos enviar a nuestro amigo. Para nuestro ejemplo escribe desde tu teclado, dentro del recuadro rojo, la palabra "Hola".',
      audio: '/assets/audio/facebook/enviarMensajes/paso8.mp3',
    },
    {
      index: 9,
      content:
        'Si deseas adjuntar un emoji puedes presionar el botón con la carita que está señalado en el recuadro rojo. Presiónala y se abrirá el cuadro de emojis.',
      audio: '/assets/audio/facebook/enviarMensajes/paso9.mp3',
    },
    {
      index: 10,
      content:
        'En el recuadro de emojis que te aparece a continuación puedes elegir el que mas te guste. Para nuestro ejemplo puedes presionar el emoji señalado en el recuadro.',
      audio: '/assets/audio/facebook/enviarMensajes/paso10.mp3',
    },
    {
      index: 11,
      content:
        'De esa manera se incluirá el emoji en tu mensaje. Al terminar de escribir el mensaje que deseas enviar, vamos a presionar el botón de "Enviar" señalado en el recuadro.',
      audio: '/assets/audio/facebook/enviarMensajes/paso11.mp3',
    },
    {
      index: 12,
      content:
        '¡Y listo! tu mensaje a sido enviado, ahora debes esperar a que tu amigo lo vea y te responda. Te esperamos en nuestro siguiente tutorial.',
      audio: '/assets/audio/facebook/enviarMensajes/paso12.mp3',
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
  enviarMensajesRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }

  facebookEnviarMensajeP5InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase();
    if (searchText.includes('itsqmet')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 1000);
    }
  }

  facebookEnviarMensajeP8InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase();
    if (searchText.includes('hola')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 1000);
    }
  }
}
