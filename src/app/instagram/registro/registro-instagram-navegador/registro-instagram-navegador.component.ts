import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro-instagram-navegador',
  templateUrl: './registro-instagram-navegador.component.html',
  styleUrls: ['./registro-instagram-navegador.component.css']
})
export class RegistroInstagramNavegadorComponent implements OnInit{
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
      content: '¡Bienvenido a este tutorial guiado para registrarse en Instagram! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
      audio: '/assets/audio/instagram/registro/paso1_registroIns.mp3',
    },
    {
      index: 2,
      content: 'Si aún no tienes la aplicación de Instagram en tu celular, ve a la tienda de aplicaciones de tu dispositivo móvil. Presiona el botón que está siendo destacado de la Play Store.',
      audio: '/assets/audio/instagram/registro/paso2_registroIns.mp3',
    },
    {
      index: 3,
      content: 'Una vez abierta la Play Store o la tienda de aplicaciones, tendremos una pantalla similar a esta. En esta pantalla, presionaremos sobre la barra de búsqueda para continuar con el siguiente paso.',
      audio: '/assets/audio/instagram/registro/paso3_registroIns.mp3',
    },
    {
      index: 4,
      content: 'Esta es la pantalla de búsqueda de la tienda de aplicaciones. En la parte superior del teléfono, tendremos una barra de búsqueda con el texto "Buscar apps y juegos". Por favor, escribe "Instagram" dentro del rectángulo rojo desde tu teclado para continuar con el siguiente paso.',
      audio: '/assets/audio/instagram/registro/paso4_registroIns.mp3',
    },
    {
      index: 5,
      content: 'Una vez realizada la búsqueda, se tendrá una pantalla similar a esta. Aquí localizaremos la aplicación que solamente tenga "Instagram" como nombre, sin ninguna palabra añadida, la misma que se muestra dentro del cuadro rojo. Una vez localizado, pulsa el botón "Instalar".',
      audio: '/assets/audio/instagram/registro/paso5_registroIns.mp3',
    },
    {
      index: 6,
      content: 'Instagram comenzará a instalarse. Sé paciente durante este proceso, ya que el tiempo dependerá de tu velocidad de conexión a internet y de la capacidad de tu celular. Una vez que la aplicación se haya instalado, te aparecerá un botón de "Abrir", como puedes ver en el recuadro rojo. Pulsa el botón para abrir la aplicación de Instagram.',
      audio: '/assets/audio/instagram/registro/paso6_registroIns.mp3',
    },
    {
      index: 7,
      content: 'Una vez que Instagram se haya iniciado, tendrás una pantalla como esta, donde debes pulsar el botón "Crear nueva cuenta".',
      audio: '/assets/audio/instagram/registro/paso7_registroIns.mp3',
    },
    {
      index: 8,
      content: 'Instagram te pedirá que ingreses tu número de teléfono o puedes elegir la opción de registrarte con tu correo electrónico, para nuestro ejemplo el registro lo haremos a través de un correo electrónico. Presiona el botón “Registrarte con tu correo electrónico” que está siendo destacado.',
      audio: '/assets/audio/instagram/registro/paso8_registroIns.mp3',
    },
    {
      index: 9,
      content: 'En la ventana que aparecerá a continuación ingresa tu correo electrónico en el rectángulo marcado de rojo. Dado que esto es una simulación, puedes escribir en el recuadro o dejarlo en blanco, pero recuerda que en la aplicación de tu celular tendrás que ingresar tu correo electrónico. Una vez que lo hagas, por favor, pulsa "Siguiente".',
      audio: '/assets/audio/instagram/registro/paso9_registroIns.mp3',
    },
    {
      index: 10,
      content: 'Luego, crea una contraseña segura para proteger tu cuenta. Asegúrate que la contraseña sea lo suficientemente segura y difícil de adivinar. Registra la contraseña en rectángulo marcado de rojo. Una vez que lo hagas, por favor, pulsa "Siguiente".',
      audio: '/assets/audio/instagram/registro/paso10_registroIns.mp3',
    },
    {
      index: 11,
      content: 'En la ventana que aparece a continuación, puedes guardar tu información de inicio de sesión. Pulsa el botón “Guardar” que está siendo destacado.',
      audio: '/assets/audio/instagram/registro/paso11_registroIns.mp3',
    },
    {
      index: 12,
      content: 'Aparecerá un cuadro en el que puedes definir tu fecha de nacimiento, puedes ir cambiando el día, mes y año, deslizando hacia arriba o hacia abajo en cada cuadro. Una vez que se encuentre colocada tu fecha de nacimiento, presiona la opción “DEFINIR” que se encuentra señalada con el recuadro rojo.',
      audio: '/assets/audio/instagram/registro/paso12_registroIns.mp3',
    },
    {
      index: 13,
      content: 'Verifica que tu fecha de nacimiento sea correcta en la ventana que aparece a continuación y presiona el botón “Siguiente” que está siendo destacado.',
      audio: '/assets/audio/instagram/registro/paso13_registroIns.mp3',
    },
    {
      index: 14,
      content: 'Instagram te va a solicitar ingresar tu nombre, presiona el recuadro con el texto “Nombre Completo” y escribe tu nombre con tu teclado. Una vez que lo hagas presiona el botón “Siguiente” que está siendo destacado.',
      audio: '/assets/audio/instagram/registro/paso14_registroIns.mp3',
    },
    {
      index: 15,
      content: 'Crea tu nombre de usuario en la ventana que se muestra a continuación, Instagram te va a sugerir un nombre de usuario en base al correo que registraste, para nuestro ejemplo vamos a dejar el nombre sugerido por Instagram, pero en el caso que desees cambiarlo presiona sobre el nombre de usuario, bórralo y escribe un nuevo nombre de usuario. Presiona el botón “Siguiente” para continuar.',
      audio: '/assets/audio/instagram/registro/paso15_registroIns.mp3',
    },
    {
      index: 16,
      content: 'Se mostrará la ventana para Aceptar las condiciones y políticas de Instagram. Presiona el botón “Acepto” que está siendo destacado.',
      audio: '/assets/audio/instagram/registro/paso16_registroIns.mp3',
    },
    {
      index: 17,
      content: 'Ahora podrás ver tu página de inicio de Instagram. ¡Felicidades, has completado el tutorial de registro en Instagram! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/instagram/registro/paso17_registroIns.mp3',
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
  instagramRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }

   //Method especific for index 3
   instagramRegistroP4InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('instagram')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
      
    }
  }
}
