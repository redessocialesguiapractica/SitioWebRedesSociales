import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-elegir-persona-enviar-mensaje-navegador',
  templateUrl: './elegir-persona-enviar-mensaje-navegador.component.html',
  styleUrls: ['./elegir-persona-enviar-mensaje-navegador.component.css']
})
export class ElegirPersonaEnviarMensajeNavegadorComponent implements OnInit {
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
        'Y podrás ver en el chat la imagen que enviaste. WhatsApp también nos brinda la opción de enviar mensajes de voz, para lo cual en nuestro chat de WhatsApp podemos visualizar un botón con un micrófono, con el cual puedes grabar audios de voz en ese instante. Presiona el botón de micrófono que está siendo destacado.',
      audio: '/assets/audio/whatsapp/EnviarMensaje/Paso16_mensaje.mp3',
    },
    {
      index: 2, 
      content:
        'Para grabar un mensaje de voz tienes dos opciones: 1.Mantener presionado el botón de micrófono y al soltarlo se enviará tu mensaje de voz. 2.Pulsar el botón de micrófono y deslizarlo hacia arriba hasta que aparezca el ícono de un candado cerrado, sueltas el botón de micrófono y continuará la grabación hasta que presiones el botón de enviar. En nuestro ejemplo puedes visualizar como la grabación se está realizando y para enviarla pulsa el botón de enviar.',
      audio: '/assets/audio/whatsapp/EnviarMensaje/Paso17_mensaje.mp3',
    },
    {
      index: 3, 
      content:
        'Se mostrará nuestro mensaje de voz en el chat de nuestro contacto. Ahora si lo que deseas es enviar un emoji o sticker, en la barra de Mensaje encontrarás el ícono de una carita feliz. Pulsa el ícono señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/EnviarMensaje/Paso18_mensaje.mp3',
    },
    {
      index: 4, 
      content:
        'Se abrirá el menú de emojis en el cual podrás seleccionar el emoji de tu preferencia y podrás enviarlo pulsando el botón Enviar. Si lo que deseas es enviar un sticker, veremos que en el menú de emojis se encuentran en la parte superior junto al botón de la carita feliz, un botón con el ícono Gif y un botón con una hoja doblada de sticker. Pulsa el botón de Sticker señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/EnviarMensaje/Paso19_mensaje.mp3',
    },
    {
      index: 5, 
      content:
        'Te aparecerán los stickers que tienes guardados en tu cuenta de whatsapp, selecciona el sticker que más te guste y pulsa sobre el para poder enviarlo. ¡Felicidades, has completado el tutorial de envío de mensajes en WhatsApp! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/whatsapp/EnviarMensaje/Paso20_mensaje.mp3',
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
