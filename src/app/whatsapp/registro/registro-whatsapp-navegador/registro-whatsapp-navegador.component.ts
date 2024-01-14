import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro-whatsapp-navegador',
  templateUrl: './registro-whatsapp-navegador.component.html',
  styleUrls: ['./registro-whatsapp-navegador.component.css']
})
export class RegistroWhatsappNavegadorComponent implements OnInit {
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
    content: '¡Bienvenido a este tutorial guiado para instalar la aplicación de Whatsapp y crear una nueva cuenta! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
    audio: '/assets/audio/whatsapp/registro/paso1whatsappregistro.mp3',
  },
  {
    index: 2,
    content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado, el cual es el botón de la Play Store o tienda de aplicaciones. Presiona el botón para continuar con el siguiente paso.',
    audio: '/assets/audio/facebook/registro/paso_2.mp3',
  },
  {
    index: 3,
    content: 'Una vez abierta la Play Store o la tienda de aplicaciones, tendremos una pantalla similar a esta. En esta pantalla, presionaremos sobre la barra de búsqueda para continuar con el siguiente paso.',
    audio: '/assets/audio/facebook/registro/paso_3.mp3',
  },
  {
    index: 4,
    content: 'Esta es la pantalla de búsqueda de la tienda de aplicaciones. En la parte superior del teléfono, tendremos una barra de búsqueda con el texto "Buscar apps y juegos". Por favor, escribe "Whatsapp" dentro del rectángulo rojo desde tu teclado para continuar con el siguiente paso.',
    audio: '/assets/audio/whatsapp/registro/paso4whatsappregistro.mp3',
  },
  {
    index: 5,
    content: 'Una vez realizada la búsqueda, se tendrá una pantalla similar a esta. Aquí localizaremos la aplicación que solamente tenga "WhatsApp" como nombre, sin ninguna palabra añadida, y que tenga "WhatsApp LLC" debajo, la misma que se muestra dentro del cuadro rojo. Una vez localizado, pulsa el botón "Instalar".',
    audio: '/assets/audio/whatsapp/registro/paso5whatsappregistro.mp3',
  },
  {
    index: 6,
    content: 'WhatsApp comenzará a instalarse. Sé paciente durante este proceso, ya que el tiempo dependerá de tu velocidad de conexión a internet y de la capacidad de tu celular. Una vez que la aplicación se haya instalado, te aparecerá un botón de "Abrir", como puedes ver en el recuadro rojo. Pulsa el botón para abrir la aplicación de WhatsApp.',
    audio: '/assets/audio/whatsapp/registro/paso6whatsappregistro.mp3',
  },
  {
    index: 7,
    content: 'Una vez que WhatsApp se haya iniciado, tendrás una pantalla como esta que te permitirá elegir el idioma de la aplicación. Por defecto, se elegirá el idioma de tu celular, que probablemente sea español. Si no es así, busca y selecciona español. A continuación, pulsa el botón verde con una flecha que está siendo destacado.',
    audio: '/assets/audio/whatsapp/registro/paso7whatsappregistro.mp3',
  },
  {
    index: 8,
    content: 'eguidamente, tendrás la pantalla de términos y condiciones. Aquí debes pulsar el botón "Aceptar y continuar" para avanzar al siguiente paso.',
    audio: '/assets/audio/whatsapp/registro/paso8whatsappregistro.mp3',
  },
  {
    index: 9,
    content: 'Seguidamente, tendrás la pantalla de términos y condiciones. Aquí debes pulsar el botón "Aceptar y continuar" para avanzar al siguiente paso.',
    audio: '/assets/audio/whatsapp/registro/paso_9.mp3',
  },
  {
    index: 10,
    content: 'Esta es la pantalla de búsqueda de la tienda de aplicaciones. En la parte superior del teléfono, tendremos una barra de búsqueda con el texto "Buscar apps y juegos". Por favor, escribe "Facebook" dentro del rectángulo rojo desde tu teclado para continuar con el siguiente paso.',
    audio: '/assets/audio/whatsapp/registro/paso_10.mp3',
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