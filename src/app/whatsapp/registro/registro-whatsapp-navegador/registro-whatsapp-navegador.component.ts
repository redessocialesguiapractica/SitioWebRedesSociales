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
    content: 'Seguidamente, tendrás la pantalla de términos y condiciones. Aquí debes pulsar el botón "Aceptar y continuar" para avanzar al siguiente paso.',
    audio: '/assets/audio/whatsapp/registro/paso8whatsappregistro.mp3',
  },
  {
    index: 9,
    content: 'A continuación, debes ingresar tu número de celular en el recuadro marcado en rojo. Una vez lo hagas y revises que el número ingresado sea el correcto, debes pulsar el botón resaltado.',
    audio: '/assets/audio/whatsapp/registro/paso9whatsappregistro.mp3',
  },
  {
    index: 10,
    content: 'Te aparecerá una ventana como esta para que puedas comprobar nuevamente tu número de celular ingresado. Una vez que compruebes que está correcto, presionarás en "Sí". Si cometiste algún error, presionarás "Editar". Pero en este caso, para continuar con el tutorial, por favor, pulsa el recuadro rojo.',
    audio: '/assets/audio/whatsapp/registro/paso10whatsappregistro.mp3',
  },
  {
    index: 11,
    content: 'WhatsApp ahora te pedirá varios permisos sobre tu teléfono para facilitar el registro. Es importante que en esta pantalla presiones el botón "Continuar". Cuando lo hagas en tu celular, asegúrate de pulsar el mismo botón. Para continuar con el siguiente paso, por favor, pulsa ese mismo botón.',
    audio: '/assets/audio/whatsapp/registro/paso11whatsappregistro.mp3',
  },
  {
    index: 12,
    content: 'Pulsa "Permitir" para que WhatsApp pueda acceder a tus registros de llamadas.',
    audio: '/assets/audio/whatsapp/registro/paso12whatsappregistro.mp3',
  },
  {
    index: 13,
    content: 'Pulsa "Permitir" para que WhatsApp administre tus llamadas.',
    audio: '/assets/audio/whatsapp/registro/paso13whatsappregistro.mp3',
  },
  {
    index: 14,
    content: 'Presiona "Continuar" para permitir que WhatsApp acceda a tus contactos en tu celular y a tus archivos multimedia.',
    audio: '/assets/audio/whatsapp/registro/paso14whatsappregistro.mp3',
  },
  {
    index: 15,
    content: 'Presiona "Permitir" para que WhatsApp pueda acceder a tus contactos de tu celular.',
    audio: '/assets/audio/whatsapp/registro/paso15whatsappregistro.mp3',
  },
  {
    index: 16,
    content: 'Pulsa "Permitir" para que WhatsApp acceda a tus fotos y contenidos multimedia de tu dispositivo.',
    audio: '/assets/audio/whatsapp/registro/paso16whatsappregistro.mp3',
  }, {
    index: 17,
    content: 'Aquí deberás ingresar tu nombre en la parte que se marca con el recuadro rojo. Una vez ingresado tu nombre, pulsa el botón "Sig."" que está siendo destacado, para continuar.',
    audio: '/assets/audio/whatsapp/registro/paso17whatsappregistro.mp3',
  }, 
  {
    index: 18,
    content: 'WhatsApp también te da la opción de ingresar tu correo electrónico para asociarlo con tu cuenta. El correo electrónico es opcional. Si no quieres ingresar tu correo electrónico o no tienes uno, deberás pulsar lo que se marca en el recuadro rojo, el texto que dice "Ahora no". Si deseas ingresar tu correo electrónico, lo harás en la parte marcada con el recuadro rojo de arriba que dice "Correo electrónico" y pulsarás "Siguiente" a continuación. En este caso, para continuar con el tutorial, puedes presionar cualquiera de esos botones.',
    audio: '/assets/audio/whatsapp/registro/paso18whatsappregistro.mp3',
  },
  {
    index: 19,
    content: '¡Felicidades, has completado el tutorial de registro de en WhatsApp!. Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
    audio: '/assets/audio/whatsapp/registro/paso19whatsappregistro.mp3',
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