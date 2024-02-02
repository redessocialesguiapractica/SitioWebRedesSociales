import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subir-yver-estados-navegador',
  templateUrl: './subir-yver-estados-navegador.component.html',
  styleUrls: ['./subir-yver-estados-navegador.component.css']
})
export class SubirYVerEstadosNavegadorComponent implements OnInit {
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
    content: '¡Bienvenido a este tutorial guiado para subir y ver estados en Whatsapp! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso1_estados.mp3',
  },
  {
    index: 2,
    content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Whatsapp para continuar con el siguiente paso.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso2_estados.mp3',
  },
  {
    index: 3,
    content: 'Una vez abierta la aplicación de Whatsapp, vamos a presionar la pestaña “Novedades” señalada en el recuadro rojo. ',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso3_estados.mp3',
  },
  {
    index: 4,
    content: 'Se abrirá nuestra ventana de "Novedades" en la que podrás ver la opción "Mi estado" (esto puede variar según la versión de WhatsApp y el idioma). Presiona la opción “Mi Estado” señalada en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso4_estados.mp3',
  },
  {
    index: 5,
    content: 'Se abrirá la cámara, y podrás tomar una foto o grabar un video para utilizar como tu estado. Si prefieres seleccionar una foto o video ya existente en tu galería, puedes pulsar el ícono de la galería señalado en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso5_estados.mp3',
  },
  {
    index: 6,
    content: 'Podrás visualizar las imágenes y videos que tienes en la galería de tu celular, busca la imagen que deseas publicar y presiona sobre ella. Para nuestro ejemplo presiona la imagen que está señalada en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso6_estados.mp3',
  },
  {
    index: 7,
    content: 'Se abrirá una ventana con la imagen preliminar de la imagen que elegiste y en la parte inferior una barra que indica: “Añade un comentario”, en la cual puedes escribir una pequeña descripción que se mostrará bajo la imagen publicada en tu estado. Presiona la barra añade un comentario. ',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso7_estados.mp3',
  },
  {
    index: 8,
    content: 'Para nuestro ejemplo en la barra de “Añade un comentario” escribe “Gallo de la catedral” desde tu teclado en el rectángulo rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso8_estados.mp3',
  },
  {
    index: 9,
    content: 'Luego, pulsa el botón de “Enviar” que está siendo destacado, para publicar tu estado.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso9_estados.mp3',
  },
  {
    index: 10,
    content: 'Una vez publicado tu estado, podrás visualizar que en la pestaña de “Novedades” se encuentra tu estado con la imagen que publicaste en miniatura. Para poder visualizar tu estado o los estados de tus contactos puedes dar clic sobre su perfil, para nuestro ejemplo, presiona el estado con el nombre “Mi estado” señalado en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso10_estados.mp3',
  },
  {
    index: 11,
    content: 'Se abrirá una ventana en la que puedes visualizar todos los estados publicados por el contacto que seleccionaste. Si visualizas tus estados verás que en la parte inferior se encuentra un ícono de un ojo con el número de personas que han visto tu estado. Para poder salir de los estados de tu contacto pulsa el botón de regreso de tu barra de navegación. Presiona el botón de retroceso señalado con el recuadro rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso11_estados.mp3',
  },
  {
    index: 12,
    content: 'Si deseas publicar solo un texto con una frase o emojis, presiona el botón con el icono de lápiz señalado en el recuadro rojo.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso12_estados.mp3',
  },
  {
    index: 13,
    content: 'Escribe el texto que deseas publicar en el recuadro que indica “Escribe un estado”. Una vez escrito tu estado pulsa el botón "Siguiente" del recuadro de instrucciones.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso13_estados.mp3',
  },
  {
    index: 14,
    content: 'En nuestro ejemplo puedes visualizar que se cambió el fondo de nuestra publicación a verde, esto se logra con las herramientas que se encuentran en la parte superior señalados con el recuadro azul. Una vez que termines de personalizar tu estado presiona el botón de “Enviar”.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso14_estados.mp3',
  },
  {
    index: 15,
    content: 'Y podrás visualizar tu estado publicado. ¡Felicidades, has completado el tutorial de Subir y ver estados en WhatsApp! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
    audio: '/assets/audio/whatsapp/subirYverEstados/Paso15_estados.mp3',
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
  whatsappEstadosClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
  whatsappEstadosP8InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('gallo de la catedral')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
      
    }
  }
}
