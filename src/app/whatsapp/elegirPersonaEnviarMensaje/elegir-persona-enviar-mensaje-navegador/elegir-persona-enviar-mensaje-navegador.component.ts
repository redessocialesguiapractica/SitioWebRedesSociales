import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-elegir-persona-enviar-mensaje-navegador',
  templateUrl: './elegir-persona-enviar-mensaje-navegador.component.html',
  styleUrls: ['./elegir-persona-enviar-mensaje-navegador.component.css'],
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
        '¡Bienvenido a este tutorial guiado para enviar mensajes por Whatsapp! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
        audio: '/assets/audio/whatsapp/enviarMensajes/w-paso1.mp3',
    },
    {
      index: 2,
      content: 'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Whatsapp para continuar con el siguiente paso.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso2.mp3',
    },
    {
      index: 3,
      content: 'Una vez abierta la aplicación de Whatsapp, vamos a presionar el ícono de mensaje señalado en el recuadro rojo. Presiona el ícono de mensaje para continuar.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso3.mp3',
    },
    {
      index: 4,
      content: 'Se mostrará nuestra lista de contactos, aquí vamos a elegir el contacto al cual deseamos enviar un mensaje, presiona sobre su nombre para ingresar a su chat. Para nuestro ejemplo vamos a elegir a Víctor, presiona la opción señalada en el rectángulo rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso4.mp3',
    },
    {
      index: 5,
      content: 'Se abrirá el chat de tu contacto, en el que encontrarás la barra de Mensaje, presiónala para que puedas escribir tu mensaje.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso5.mp3',
    },
    {
      index: 6,
      content: 'Para nuestro ejemplo en la barra de “Mensaje” escribe “Hola” desde tu teclado en el rectángulo rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso6.mp3',
    },
    {
      index: 7,
      content: 'Una vez escrito tu mensaje presiona el botón de “Enviar” que está señalado por el cuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso7.mp3',
    },
    {
      index: 8,
      content: 'Y se habrá enviado el mensaje a tu contacto. En la barra de mensajes también puedes ver el ícono de un clip, junto al ícono de la cámara. Presiona el clip que está siendo señalado por el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso8.mp3',
    },
    {
      index: 9,
      content: 'Una vez presionado el ícono de clip, se abrirá el menú de adjuntos. Si deseas enviar un documento, presiona el botón de "Documento" o "Archivo" que está siento destacado (el nombre puede variar según la versión de WhatsApp).',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso9.mp3',
    },
    {
      index: 10,
      content: 'Se abrirá la ventana de Documentos, en la cual vas a encontrar enlistados archivos que tienes guardados en tu celular. Busca el archivo que deseas enviar y presiona sobre el. Para nuestro ejemplo presiona el archivo señalado en el rectángulo rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso10.mp3',
    },
    {
      index: 11,
      content: 'Se abrirá una ventana con la imagen preliminar del archivo que elegiste y en la parte inferior una barra que indica: “Añade un comentario”, en la cual puedes escribir un mensaje que se enviará junto al archivo. Para nuestro ejemplo, solo enviaremos el documento que elegimos. Presiona el botón de enviar que está señalado por el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso11.mp3',
    },
    {
      index: 12,
      content: 'En el chat de tu contacto podrás ver el documento enviado. Ahora adjuntaremos una imagen, para lo cual volveremos a presionar el ícono de clip que está siendo señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso12.mp3',
    },
    {
      index: 13,
      content: 'Para adjuntar una imagen tenemos dos opciones, la primera es con el botón de “Cámara” en el caso que desees enviar una foto capturada en ese momento y la segunda opción es con el botón de “Galería” en el caso que desees enviar una foto guardada en tu celular. Para nuestro ejemplo vamos a presionar el botón de “Galería” que está señalado por el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso13.mp3',
    },
    {
      index: 14,
      content: 'Podrás visualizar las imágenes y videos que tienes en la galería de tu celular, busca la imagen que deseas enviar y presiona sobre ella. Para nuestro ejemplo presiona la imagen que está señalada en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso14.mp3',
    },
    {
      index: 15,
      content: 'Al igual que con los documentos, se nos abrirá una ventana preliminar con nuestra imagen y la barra para añadir un comentario, para que agregues un mensaje en el caso que lo desees. Presiona el botón de enviar.',
      audio: '/assets/audio/whatsapp/enviarMensajes/w-paso15.mp3',
    },
    {
      index: 16, 
      content:
        'Y podrás ver en el chat la imagen que enviaste. WhatsApp también nos brinda la opción de enviar mensajes de voz, para lo cual en nuestro chat de WhatsApp podemos visualizar un botón con un micrófono, con el cual puedes grabar audios de voz en ese instante. Presiona el botón de micrófono que está siendo destacado.',
      audio: '/assets/audio/whatsapp/enviarMensajes/Paso16_mensaje.mp3',
    },
    {
      index: 17, 
      content:
        'Para grabar un mensaje de voz tienes dos opciones: 1.Mantener presionado el botón de micrófono y al soltarlo se enviará tu mensaje de voz. 2.Pulsar el botón de micrófono y deslizarlo hacia arriba hasta que aparezca el ícono de un candado cerrado, sueltas el botón de micrófono y continuará la grabación hasta que presiones el botón de enviar. En nuestro ejemplo puedes visualizar como la grabación se está realizando y para enviarla pulsa el botón de enviar.',
      audio: '/assets/audio/whatsapp/enviarMensajes/Paso17_mensaje.mp3',
    },
    {
      index: 18, 
      content:
        'Se mostrará nuestro mensaje de voz en el chat de nuestro contacto. Ahora si lo que deseas es enviar un emoji o sticker, en la barra de Mensaje encontrarás el ícono de una carita feliz. Pulsa el ícono señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/Paso18_mensaje.mp3',
    },
    {
      index: 19, 
      content:
        'Se abrirá el menú de emojis en el cual podrás seleccionar el emoji de tu preferencia y podrás enviarlo pulsando el botón Enviar. Si lo que deseas es enviar un sticker, veremos que en el menú de emojis se encuentran en la parte superior junto al botón de la carita feliz, un botón con el ícono Gif y un botón con una hoja doblada de sticker. Pulsa el botón de Sticker señalado en el recuadro rojo.',
      audio: '/assets/audio/whatsapp/enviarMensajes/Paso19_mensaje.mp3',
    },
    {
      index: 20, 
      content:
        'Te aparecerán los stickers que tienes guardados en tu cuenta de whatsapp, selecciona el sticker que más te guste y pulsa sobre el para poder enviarlo. ¡Felicidades, has completado el tutorial de envío de mensajes en WhatsApp! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/whatsapp/enviarMensajes/Paso20_mensaje.mp3',
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
  whatsappMensajesClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }
  
  whatasappEnviarMensajeP6InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase();
    if (searchText.includes('hola')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 1000);
    }
  }

}
