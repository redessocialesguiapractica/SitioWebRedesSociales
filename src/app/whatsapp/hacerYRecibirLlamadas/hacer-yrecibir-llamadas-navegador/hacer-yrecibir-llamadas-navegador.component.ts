import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hacer-yrecibir-llamadas-navegador',
  templateUrl: './hacer-yrecibir-llamadas-navegador.component.html',
  styleUrls: ['./hacer-yrecibir-llamadas-navegador.component.css']
})
export class HacerYRecibirLlamadasNavegadorComponent implements OnInit {
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
    content: '¡Bienvenido a este tutorial guiado para hacer y recibir llamadas y videollamadas en Whatsapp! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso1.mp3',
  },
  {
    index: 2,
    content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Whatsapp para continuar con el siguiente paso.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso2.mp3',
  },
  {
    index: 3,
    content: 'Una vez abierta la aplicación de Whatsapp, vamos a presionar la pestaña “Llamadas” señalada en el recuadro rojo.  ',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso3.mp3',
  },
  {
    index: 4,
    content: 'En la ventana de Llamadas encontrarás un botón con un teléfono. Presiona el botón que está siendo destacado para iniciar una llamada.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso4.mp3',
  },
  {
    index: 5,
    content: 'Se abrirá la lista de tus contactos, en la que podemos visualizar una barra de búsqueda con el texto "Buscar nombre o número". Escribe el nombre del contacto al que deseas llamar. Para nuestro ejemplo puedes escribir "Eli" desde tu teclado.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso5.mp3',
  },
  {
    index: 6,
    content: 'Te aparecerán todas las opciones relacionadas a tu búsqueda, Selecciona el contacto de la persona a la que deseas llamar. Para nuestro ejemplo, presiona la opción indicada en el rectángulo rojo.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso6.mp3',
  },
  {
    index: 7,
    content: 'Al seleccionar a tu contacto se ubicará en la parte superior de la pantalla bajo la barra de “Buscar nombre o número”, y verás que tiene dos botones al lado derecho. Para realizar una video llamada, presiona el primer botón con el ícono de una videocámara que está siendo señalado con el recuadro rojo.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso7.mp3',
  },
  {
    index: 8,
    content: 'Se activará la cámara de tu celular e iniciará la llamada, espera a que la otra persona acepte tu llamada. Para finalizar la llamada pulsa el botón rojo que está siendo destacado.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso8.mp3',
  },
  {
    index: 9,
    content: 'En cambio para realizar una llamada de voz normal, al seleccionar a tu contacto, presiona el segundo botón con el ícono de un teléfono, que está siendo señalado con el recuadro rojo.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso9.mp3',
  },
  {
    index: 10,
    content: 'De esta manera iniciará la llamada de voz, espera a que la otra persona acepte tu llamada. Para finalizar la llamada pulsa el botón rojo que está siendo destacado.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso10.mp3',
  },
  {
    index: 11,
    content: 'Cuando alguien te llame a través de WhatsApp, en tu celular recibirás una notificación de “Llamada entrante” o “Videollamada entrante”, con los botones de “Rechazar” y “Contestar”. Presiona el botón de “Contestar” que está siendo destacado.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso11.mp3',
  },
  {
    index: 12,
    content: 'Iniciará la llamada por Whatsapp y para finalizarla, pulsa el botón rojo que está siendo destacado. ',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso12.mp3',
  },
  {
    index: 13,
    content: 'Al finalizar una llamada, podrás visualizar que en la pestaña de “Llamadas”, se va enlistando tu historial de llamadas realizadas y recibidas. ¡Felicidades, has completado el tutorial de llamadas en whatsapp! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
    audio: '/assets/audio/whatsapp/recibirLlamada/paso13.mp3',
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
whatsappLlamadaClicked(): void {
  // Call the nextInstruction method or perform other actions specific to index 1
  this.nextInstruction();
}

 //Method especific for index 4
 whatsappLlamadaP5InputChanged(event: Event): void {
  const target = event.target as HTMLInputElement;
  const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  if (searchText.includes('eli')) {
    this.nextInstructionTimer = setTimeout(() => {
      this.nextInstruction();
    }, 2000);
    
  }
}

}