import { Component,OnInit , ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cambiar-foto-perfil-navegador',
  templateUrl: './cambiar-foto-perfil-navegador.component.html',
  styleUrls: ['./cambiar-foto-perfil-navegador.component.css']
})
export class CambiarFotoPerfilNavegadorComponent implements OnInit {
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
    content: '¡Bienvenido a este tutorial guiado para Cambiar la foto de perfil en WhatsApp! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso1_foto.mp3',
  },
  {
    index: 2,
    content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Whatsapp para continuar con el siguiente paso.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso2_foto.mp3',
  },
  {
    index: 3,
    content: 'En la barra principal de Whatsapp junto al ícono de la lupa. Presiona los tres puntos señalados por el recuadro rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso3_foto.mp3',
  },
  {
    index: 4,
    content: 'Se te abrirá un pequeño menú de opciones. Presiona sobre la opción de “Ajustes” señalada con el recuadro rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso4_foto.mp3',
  },
  {
    index: 5,
    content: 'En la sección de "Ajustes", toca sobre tu foto de perfil actual, ubicada en la parte superior izquierda de la pantalla. Presiona la foto de perfil señalada en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso5_foto.mp3',
  },
  {
    index: 6,
    content: 'Esto abrirá tu perfil. Presiona sobre el ícono de cámara de la cámara que está siendo señalado por el rectángulo rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso6_foto.mp3',
  },
  {
    index: 7,
    content: 'Se te presentarán tres opciones para seleccionar una nueva imagen de perfil. Puedes elegir tomar una nueva foto, seleccionar una de tu galería de fotos o elegir un avatar de WhatsApp. Para nuestro ejemplo presiona el ícono de “Galería” señalada en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso7_foto.mp3',
  },
  {
    index: 8,
    content: 'Podrás visualizar las imágenes que tienes en la galería de tu celular, busca la imagen que deseas poner en tu foto de perfil. Para nuestro ejemplo presiona la imagen que está señalada con el recuadro rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso8_foto.mp3',
  },
  {
    index: 9,
    content: 'Ajusta el tamaño de tu foto a tu preferencia y una vez que esté lista, presiona la opción “OK” señalada en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso9_foto.mp3',
  },
  {
    index: 10,
    content: 'Y podrás ver en la ventana de Perfil, tu nueva foto en WhatsApp. ¡Felicidades, has completado el tutorial para Cambiar foto de perfil en WhatsApp! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones. ',
    audio: '/assets/audio/whatsapp/CambiarFoto/Paso10_foto.mp3',
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
  whatsappRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
  whatsappRegistroP4InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('whatsapp')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
      
    }
  }

}
