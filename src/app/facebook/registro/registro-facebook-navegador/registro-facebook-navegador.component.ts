import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registro-facebook-navegador',
  templateUrl: './registro-facebook-navegador.component.html',
  styleUrls: ['./registro-facebook-navegador.component.css']
})
export class RegistroFacebookNavegadorComponent implements OnInit {
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
      content: '¡Bienvenido a este tutorial guiado para instalar la aplicación de Facebook y crear una nueva cuenta! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
      audio: '/assets/audio/facebook/registro/paso_1.mp3',
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
      content: 'Esta es la pantalla de búsqueda de la tienda de aplicaciones. En la parte superior del teléfono, tendremos una barra de búsqueda con el texto "Buscar apps y juegos". Por favor, escribe "Facebook" dentro del rectángulo rojo desde tu teclado para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/registro/paso_4.mp3',
    },
    {
      index: 5,
      content: 'Una vez realizada la búsqueda, se tendrá una pantalla similar a esta. Aquí localizaremos la aplicación que solamente tenga "Facebook" como nombre, sin ninguna palabra añadida, y que tenga "Meta Platforms Inc." debajo, la misma que se muestra dentro del cuadro rojo. Una vez localizado, pulsa el botón "Instalar".',
      audio: '/assets/audio/facebook/registro/paso_5.mp3',
    },
    {
      index: 6,
      content: 'Facebook comenzará a instalarse. Sé paciente durante este proceso, ya que el tiempo dependerá de tu velocidad de conexión a internet y de la capacidad de tu celular. Una vez que la aplicación se haya instalado, te aparecerá un botón de "Abrir", como puedes ver en el recuadro rojo. Pulsa el botón para abrir la aplicación de Facebook.',
      audio: '/assets/audio/facebook/registro/paso_6.mp3',
    },
    {
      index: 7,
      content: 'Al abrir la aplicación, puede tomar unos segundos en cargar. Espera pacientemente hasta que la aplicación se inicie. Una vez iniciada, tendrás una pantalla como esta, donde debes pulsar el botón "Crear nueva cuenta".',
      audio: '/assets/audio/facebook/registro/paso_7.mp3',
    },
    {
      index: 8,
      content: 'Como nuestro objetivo es la creación de una cuenta nueva en Facebook, en esta pantalla se debe pulsar el botón "Empezar".',
      audio: '/assets/audio/facebook/registro/paso_8.mp3',
    },
    {
      index: 9,
      content: 'Facebook te preguntará por tu nombre y apellido real, como puedes ver en los recuadros marcados con rojo. Dado que esto es una simulación, puedes escribir en los recuadros o dejarlos en blanco, pero recuerda que en la aplicación de tu celular tendrás que ingresar tu nombre y apellido. Una vez que lo hagas, por favor, pulsa "Siguiente" para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/registro/paso_9.mp3',
    },
    {
      index: 10,
      content: 'A continuación, se te presentará una pantalla similar a esta, donde deberás elegir tu fecha de nacimiento. Cuando lo hagas en tu celular, podrás utilizar la pantalla táctil. En este caso, ya se ha definido una fecha. Para avanzar, simplemente presiona el botón "DEFINIR" en el recuadro rojo para continuar.',
      audio: '/assets/audio/facebook/registro/paso_10.mp3',
    },
    {
      index: 11,
      content: 'Después de ingresar tu fecha de nacimiento, esta se mostrará en un recuadro junto con tu edad. Cuando lo hagas en tu celular, tendrás la opción de volver a ingresar tu fecha de nacimiento si pulsas en lo que se muestra en el cuadro rojo. Para continuar con el siguiente paso, por favor pulsa "Siguiente".',
      audio: '/assets/audio/facebook/registro/paso_11.mp3',
    },
    {
      index: 12,
      content: 'A continuación, Facebook te preguntará el género con el que te identificas. Como puedes ver en el recuadro rojo, tienes tres opciones. Elige la opción que más te convenga haciendo clic en los círculos y pulsa el botón "Siguiente" para continuar.',
      audio: '/assets/audio/facebook/registro/paso_12.mp3',
    },
    {
      index: 13,
      content: 'Para este paso, puedes ingresar tu número de teléfono o tu correo electrónico en el cuadro rojo. En tu aplicación de celular, podrás cambiar entre estas opciones con el botón que se marca en azul. Pero para esta simulación, ingresa cualquier texto en la caja y pulsa el botón de "Siguiente" para ver el siguiente paso.',
      audio: '/assets/audio/facebook/registro/paso_13.mp3',
    },
    {
      index: 14,
      content: 'Para la creación de la cuenta, es necesario crear una contraseña. En la aplicación móvil, tendrás un lugar para ingresar la contraseña, parecido a lo que está en el recuadro rojo. Recuerda ingresar una contraseña que recuerdes y que cumpla con tener al menos 6 letras o números. Una vez ingreses una contraseña, pulsa el botón "Siguiente".',
      audio: '/assets/audio/facebook/registro/paso_14.mp3',
    },
    {
      index: 15,
      content: 'En esta pantalla, se te preguntará si quieres guardar tu información de inicio de sesión. Si estás realizando la creación de cuenta en tu celular personal, es recomendable que pulses el botón "Guardar". Presiona ese botón para continuar.',
      audio: '/assets/audio/facebook/registro/paso_15.mp3',
    },
    {
      index: 16,
      content: 'A continuación, Facebook te pedirá que aceptes los términos y condiciones de uso de la aplicación. En este paso, pulsaremos el botón "Acepto" para continuar.',
      audio: '/assets/audio/facebook/registro/paso_16.mp3',
    },
    {
      index: 17,
      content: 'El código de confirmación te llegará a tu correo electrónico o a tu celular, revisa tu correo electronico o mensajes de tu celular, según lo que hayas escogido al registrarte. Una vez que obtengas el código, deberás ingresarlo en el recuadro rojo y pulsar el botón "Siguiente". Para esta simulación, puedes ingresar cualquier número o dejarlo en blanco, pero pulsa el botón "Siguiente" para continuar.',
      audio: '/assets/audio/facebook/registro/paso_17.mp3',
    },
    {
      index: 18,
      content: 'En esta pantalla, Facebook te dará la opción de agregar una foto de perfil. En tu aplicación de celular, podrás hacerlo pulsando el botón "Agregar foto", pero en este caso, para continuar con el siguiente paso, por favor, pulsa el botón "Omitir", que está marcado en un recuadro rojo.',
      audio: '/assets/audio/facebook/registro/paso_18.mp3',
    },
    {
      index: 19,
      content: 'Facebook también te dará la opción de importar tus contactos que tengas registrados en tu celular. En tu aplicación en el celular, podrás hacerlo pulsando el botón "Activar", donde te aparecerán tus contactos guardados en el celular que también posean una cuenta de Facebook. Si no quieres agregarlos de esta forma o prefieres hacerlo después, puedes pulsar el botón marcado en rojo que dice "Ahora no". Pero para esta simulación, por favor, pulsa el botón "Ahora no" marcado en rojo para continuar.',
      audio: '/assets/audio/facebook/registro/paso_19.mp3',
    },
    {
      index: 20,
      content: '¡Felicidades, has completado el tutorial de creación de cuenta en Facebook! Siguiendo este tutorial, ya puedes utilizar Facebook para comunicarte con tus familiares. Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/facebook/registro/paso_20.mp3',
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
  facebookRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }

   //Method especific for index 3
   facebookRegistroP4InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('facebook')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
      
    }
  }
  
}
