import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bloqueo-numeros-desconocidos-navegador',
  templateUrl: './bloqueo-numeros-desconocidos-navegador.component.html',
  styleUrls: ['./bloqueo-numeros-desconocidos-navegador.component.css']
})
export class BloqueoNumerosDesconocidosNavegadorComponent implements OnInit {
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
      content:
        '¡Bienvenido a este tutorial guiado para Bloquear números desconocidos en Whatsapp! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso1_bloquear.mp3',
    },
    {
      index: 2,
      content:
        'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Whatsapp para continuar con el siguiente paso.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso2_bloquear.mp3',
    },
    {
      index: 3,
      content:
        'Una vez abierta la aplicación de Whatsapp, vas a visualizar la ventana de la pestaña “Chats”, busca el chat del número que deseas bloquear y pulsa sobre él. Presiona el chat señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso3_bloquear.mp3',
    },
    {
      index: 4,
      content:
        'Al ingresar al chat seleccionado, dependiendo de la versión de Whatsapp que tengas, vas a poder visualizar que, en la parte superior del chat bajo la franja verde, aparecen dos botones de “Bloquear” y “Añadir”. En el caso que no tengas estos botones vamos a presionar los tres puntos señalados en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso4_bloquear.mp3',
    },
    {
      index: 5,
      content:
        'Vas a poder visualizar un pequeño menú que se abrió al presionar los tres puntos. Presiona la opción “Bloquear” señalado en el rectángulo rojo.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso5_bloquear.mp3',
    },
    {
      index: 6,
      content:
        'Te aparecerá una ventana con los motivos por los que deseas bloquear el número seleccionado, selecciona la opción que más se adapte a ti. Para nuestro ejemplo vamos a presionar la opción señalada con el rectángulo rojo.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso6_bloquear.mp3',
    },
    {
      index: 7,
      content:
        'Una vez seleccionado el Motivo del bloqueo, se activará el botón de “Bloquear” para poder continuar. Presiona el botón “Bloquear” que está siendo destacado.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso7_bloquear.mp3',
    },
    {
      index: 8,
      content:
        'Regresarás al chat del número que se bloque y podrás visualizar que al final del chat aparece un mensaje indicando: “Bloqueaste este contacto. Toca para desbloquearlo” o “Bloqueaste esta empresa. Toca para desbloquearla”. Sal del chat con el botón de navegación de tu celular. Presiona el botón señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso8_bloquear.mp3',
    },
    {
      index: 9,
      content:
        'Al regresar a la pestaña de Chats podrás visualizar que el chat del número que fue bloqueado y ya no se encuentra en la ventana, por lo tanto, este contacto ya no podrá enviarte mensajes ni realizarte ninguna llamada por whatsapp. ¡Felicidades, has completado el tutorial! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/whatsapp/BloquearNumeros/Paso9_bloquear.mp3',
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
  bloquearNumerosRegistroClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }

}
