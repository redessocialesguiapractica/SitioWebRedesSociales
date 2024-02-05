import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-navegacion-instagram-navegador',
  templateUrl: './barra-navegacion-instagram-navegador.component.html',
  styleUrls: ['./barra-navegacion-instagram-navegador.component.css']
})
export class BarraNavegacionInstagramNavegadorComponent implements OnInit {
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
        '¡Bienvenido a este tutorial guiado para conocer la Barra de navegación de Instagram! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
        audio: '/assets/audio/instagram/barraNavegacion/insta-paso1.mp3',
    },
    {
      index: 2,
      content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Instagram.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso2.mp3',
    },
    {
      index: 3,
      content: 'Una vez que la aplicación se haya cargado, estarás en la página de inicio de Instagram y podrás ver en la parte inferior de la pantalla una barra de navegación con varias opciones, incluyendo "Inicio" con el ícono de una casa, "Buscar" con el ícono de una lupa, "Crear" con el ícono de un signo más dentro de un cuadro,  "Reels" con el ícono de un video y "Tu Feed" con el ícono de tu foto de perfil. Presiona la opción “Tu Feed” que está siendo señalada con el recuadro rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso3.mp3',
    },
    {
      index: 4,
      content: 'Te aparecerá tu perfil de Instagram donde puedes ver tus publicaciones, seguidores, a quién sigues y más. Presiona la opción “Reels” que está siendo señalada con el recuadro rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso4.mp3',
    },
    {
      index: 5,
      content: 'Podrás ver la sección de Reels, donde puedes descubrir y crear videos cortos y divertidos. Para ver mas reels puedes deslizar hacia arriba el video que estás visualizando. Presiona la opción “Crear” que está siendo señalada con el recuadro rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso5.mp3',
    },
    {
      index: 6,
      content: 'En esta sección vas a poder editar tus publicaciones, compartir fotos, videos, historias o reels. Si es la primera vez que ingresas a esta sección se te va a solicitar ciertos permisos que necesita Instagram sobre tus archivos. En el cuadro que va a aparecer con la pregunta ¿Quieres permitir que Instagram acceda a las fotos y el contenido multimedia del dispositivo? Presiona la opción “Permitir” señalado con el rectángulo rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso6.mp3',
    },
    {
      index: 7,
      content: 'Te aparecerá también un cuadro con la pregunta ¿Permitir que Instagram tome fotos y grabe videos? Presiona la opción “Mientras la app está en uso” señalado con el rectángulo rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso7.mp3',
    },
    {
      index: 8,
      content: 'En el cuadro con la pregunta ¿Permitir que Instagram grabe audio? Presiona la opción “Mientras la app está en uso” señalado con el rectángulo rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso8.mp3',
    },
    {
      index: 9,
      content: 'De esa manera podrás tener acceso a tu sección para compartir una nueva publicación. En esta ocasión no realizaremos ninguna publicación por lo cual vamos a presionar sobre la X señalada con el recuadro rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso9.mp3',
    },
    {
      index: 10,
      content: 'La opción “Buscar” se encuentra detallada en nuestro tutorial “Buscar en Instagram”, por lo cual vamos a la opción “Inicio”, presiona el ícono que está siendo señalado con el recuadro rojo.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso10.mp3',
    },
    {
      index: 11,
      content: 'Con esta opción podrás volver a la página de inicio de Instagram en cualquier momento. ¡Felicidades, has completado el tutorial para conocer la Barra de navegación de Instagram! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/instagram/barraNavegacion/insta-paso11.mp3',
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
  instagramNavegacionClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
}