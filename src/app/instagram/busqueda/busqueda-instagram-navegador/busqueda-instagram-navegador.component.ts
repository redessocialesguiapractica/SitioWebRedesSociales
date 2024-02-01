import { Component,OnInit , ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busqueda-instagram-navegador',
  templateUrl: './busqueda-instagram-navegador.component.html',
  styleUrls: ['./busqueda-instagram-navegador.component.css']
})
export class BusquedaInstagramNavegadorComponent {
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
    content: '¡Bienvenido a este tutorial guiado para realizar una Búsqueda en Instagram! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp1.mp3',
  },
  {
    index: 2,
    content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Instagram. ',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp2.mp3',
  },
  {
    index: 3,
    content: 'Una vez que la aplicación se haya cargado, estarás en la página de inicio de instagram y podrás ver en la parte inferior de la pantalla una barra de navegación con varias opciones, incluyendo "Inicio", "Buscar", "Crear",  "Reels" y "Tu Feed". Presiona el ícono de "Buscar" (es el ícono de una lupa) en la barra de navegación, señalado con el recuadro rojo, para acceder a la página de búsqueda.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp3.mp3',
  },
  {
    index: 4,
    content: 'En la parte superior de la página de búsqueda, verás la barra de “Buscar”. Presiona la barra “Buscar” que está siendo destacada y aparecerá el teclado en pantalla.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp4.mp3',
  },
  {
    index: 5,
    content: 'Puedes buscar cuentas, hashtags o ubicaciones. Por ejemplo, puedes buscar el nombre de un usuario, un hashtag específico como #viajes o una ubicación como "París". Para nuestro ejemplo con tu teclado escribe París en la barra “Buscar” señalada con el rectángulo rojo.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp5.mp3',
  },
  {
    index: 6,
    content: 'Después de ingresar tu término de búsqueda, se enlistarán resultados similares al término que ingresaste, selecciona la opción que deseas de la lista de sugerencias. Para nuestro ejemplo presiona la opción señalada en el rectángulo rojo.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp6.mp3',
  },
  {
    index: 7,
    content: 'Instagram te mostrará todos los resultados relacionados con tu búsqueda, puedes explorar por las opciones “Para ti”, “Cuentas”, “Audio”, “Hashtags”, “Lugares” y “Reels”. Para nuestro ejemplo presiona el Reel que está siendo señalado con el recuadro rojo.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp7.2.mp3',
  },
  {
    index: 8,
    content: 'Y aparecerá en pantalla completa la opción que seleccionaste. Para regresar a tu sección de búsqueda solo presiona el ícono regresar que se encuentra señalado en el recuadro rojo.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp8.mp3',
  },
  {
    index: 9,
    content: '¡Felicidades, has completado el tutorial de realizar Búsquedas en Instagram! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
    audio: '/assets/audio/instagram-Busquedad/instagram-Busquedadp9.mp3',
  }
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
  instagramBusquedaClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
  instagramBusquedaP5InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('parís')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 1000);
      
    }
  }

}
