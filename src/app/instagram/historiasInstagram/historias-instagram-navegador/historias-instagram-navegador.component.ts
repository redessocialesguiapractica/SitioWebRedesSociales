import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historias-instagram-navegador',
  templateUrl: './historias-instagram-navegador.component.html',
  styleUrls: ['./historias-instagram-navegador.component.css']
})
export class HistoriasInstagramNavegadorComponent implements OnInit{
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
    content: '¡Bienvenido a este tutorial guiado en el que aprenderás como utilizar las Historias de Instagram para compartir momentos de tu día a día de una manera divertida y creativa! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso1.mp3',
  },
  {
    index: 2,
    content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Instagram. ',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso2.mp3',
  },
  {
    index: 3,
    content: 'Una vez que la aplicación se haya cargado, estarás en la página de inicio de instagram y podrás ver en la parte inferior de la pantalla una barra de navegación con varias opciones, en la cual vamos a presionar la opción de "Crear" señalada con el recuadro rojo.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso3.mp3',
  },
  {
    index: 4,
    content: 'En esta sección vas a poder compartir fotos, videos, historias o reels. Por lo tanto, debes ya tener habilitado todos los permisos solicitados por Instagram, si es la primera vez que ingresas a esta sección te sugiero visitar nuestro tutorial “Barra de navegación de Instagram” para que puedas conocer más sobre estos permisos. En la parte inferior de la ventana de Nueva publicación, vas a encontrar una barra con los ítems que puedes compartir. Presiona la opción “HISTORIA” que está siendo señalada con el recuadro rojo.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso4.mp3',
  },
  {
    index: 5,
    content: 'En la cámara de las Historias, puedes tomar una foto presionando una vez el botón circular en la parte inferior o mantenerlo presionado para grabar un video. También puedes seleccionar una foto o video de tu galería, presiona el ícono de la galería en la esquina inferior izquierda, señalado con el cuadro rojo.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso5.mp3',
  },
  {
    index: 6,
    content: 'Selecciona la foto o video que deseas publicar en tu historia o si deseas tomar una foto del momento vuelve a la opción de Cámara. Para nuestro ejemplo presiona sobre la imagen que está siendo señalada en el recuadro rojo.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso6.mp3',
  },
  {
    index: 7,
    content: 'Una vez que hayas tomado una foto, grabado un video o insertado una imagen, puedes agregar diferentes efectos y stickers. Presiona el botón del papelito feliz para acceder a los stickers, el botón con letras para agregar texto, el botón con la nota musical para agregar música a tu historia. Para nuestro ejemplo presiona el botón señalado con el cuadro rojo, para acceder a los stickers.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso7.mp3',
  },
  {
    index: 8,
    content: 'Experimenta con diferentes opciones de edición para personalizar tu Historia. Presiona el sticker señalado con el recuadro rojo para insertarlo en tu historia.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso8.mp3',
  },
  {
    index: 9,
    content: 'Una vez que estés satisfecho con tu Historia, presiona el botón "Tu historia" en la parte inferior de la pantalla señalado con el rectángulo rojo, para compartirla con tus seguidores.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso9.mp3',
  },
  {
    index: 10,
    content: 'Si es tu primera historia te aparecerá un recuadro que indica lo siguiente: “Comparte automáticamente tus historias de Instagram en Facebook”, si deseas que tu historia sea visible también en Facebook presiona el botón “Compartir historias”, caso contrario presiona el botón “Ahora no” que está siendo destacado.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso10.mp3',
  },
  {
    index: 11,
    content: 'Instagram también te presentará una ventana que indica: “Presentamos un archivo para tus historias”. Presiona el botón “Aceptar” señalado en el rectángulo rojo. ',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso11.mp3',
  },
  {
    index: 12,
    content: 'De esa manera tu historia será publicada y para que puedas saber quién ha visto tu Historia, presiona tu foto de perfil, señalado con el cuadro rojo, en la esquina superior izquierda.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso12.mp3',
  },
  {
    index: 13,
    content: '¡Felicidades, has completado el tutorial para aprender a utilizar las Historias de Instagram! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
    audio: '/assets/audio/instagram/historiaInstagram/historiaInstagram_paso13.mp3',
  },
]
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
  historiasInstagramClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
  historiasInstagramP8InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('instagram')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
    }
  }
}
