import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-amigos-navegador',
  templateUrl: './agregar-amigos-navegador.component.html',
  styleUrls: ['./agregar-amigos-navegador.component.css'],
})
export class AgregarAmigosNavegadorComponent implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) {}
  private nextInstructionTimer: any;
  private audioSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.repeatInstruction();
    this.setupNextInstructionTrigger();
  }
  audioInstruccionesData = [
    {
      index: 1, // Este es el paso 3
      content:
        '¡Bienvenido a este tutorial guiado para agregar amigos en Facebook a través de su aplicación móvil! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_1.mp3',
    },
    {
      index: 2, // Este es el paso 10
      content:
        'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado, de nuestra aplicación de Facebook. Presiona el botón para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_2.mp3',
    },
    {
      index: 3, // Este es el paso 11
      content:
        'Una vez abierta la aplicación de Facebook, presionaremos el círculo pequeño con nuestra foto de perfil que se encuentra dentro del cuadro rojo. Presiona el círculo para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_3.mp3',
    },
    {
      index: 4,
      content:
        'Al presionar el círculo, vamos a ver el menú que tenemos para nuestro perfil, y buscamos el botón Amigos señalado en el recuadro rojo. Presiona el botón para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_4.mp3',
    },
    {
      index: 5,
      content:
        'A continuación se abrirá la pantalla Amigos en la que vamos a ver una lupa en la parte superior del teléfono, esta lupa nos va a permitir buscar amigos, presionamos la lupa dentro del cuadro rojo para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_5.mp3',
    },
    {
      index: 6,
      content:
        'Esta es la pantalla de búsqueda de amigos. En la parte superior del teléfono, tendremos una barra de búsqueda con el texto "Buscar amigos". Escribe el nombre de tu amigo dentro del rectángulo rojo desde tu teclado para continuar con el siguiente paso. Para nuestro ejemplo puedes escribir "Luz".',
      audio: '/assets/audio/facebook/agregar_amigos/paso_6.mp3',
    },
    {
      index: 7,
      content:
        'Te aparecerán varias opciones que coinciden con el nombre que ingresaste, escoge la que más se parece a la opción que buscas y presiónala, en nuestro ejemplo elegimos a luz. Presiona la opción indicada en el recuadro rojo para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_7.mp3',
    },
    {
      index: 8,
      content:
        'Aquí encontrarás varios perfiles de personas con un nombre igual o similar al que escribiste, busca a tu amigo y al encontrarlo presiona el botón "Agregar a amigos".',
      audio: '/assets/audio/facebook/agregar_amigos/paso_8.mp3',
    },

    {
      index: 9,
      content:
        'Y listo, se enviará una solicitud de amistad a la persona que seleccionaste y deberás esperar a que la acepte.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_9.mp3',
    },
    {
      index: 10,
      content:
        'Si por alguna razón deseas cancelar la solicitud de amistad enviada, debes presionar el botón "Cancelar" señalado en el recuadro rojo.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_10.mp3',
    },
    {
      index: 11,
      content:
        'Te aparecerá un recuadro con la pregunta "¿Cancelar la solicitud de amistad?" con las opciones "CERRAR" y "CANCELAR SOLICITUD", presiona la opción "CANCELAR SOLICITUD" para que elimines la solicitud de amistad enviada a esa persona. ¡Y listo! Te esperamos en nuestro siguiente tutorial.',
      audio: '/assets/audio/facebook/agregar_amigos/paso_11.mp3',
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
  agregarAmigosRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }

  facebookAgregarAmigosP6InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase();
    if (searchText.includes('luz')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 1000);
    }
  }
  
}
