import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publicar-en-muro-navegador',
  templateUrl: './publicar-en-muro-navegador.component.html',
  styleUrls: ['./publicar-en-muro-navegador.component.css']
})
export class PublicarEnMuroNavegadorComponent implements OnInit {
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
      content: '¡Bienvenido a este tutorial guiado para poder aprender a publicar en el muro de Facebook a través de su aplicación móvil! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos presionando el botón que está siendo destacado, de nuestra aplicación de Facebook.',
      audio: '/assets/audio/facebook/primerpasomuro1.mp3',
    },
    {
      index: 2,
      content: 'Una vez que hayas iniciado sesión, serás dirigido a tu página de inicio. Para publicar en tu propio muro, presionaremos el círculo pequeño con nuestra foto de perfil que se encuentra dentro del cuadro rojo. Presiona el círculo para continuar con el siguiente paso.',
      audio: '/assets/audio/facebook/tercerpasomuro.mp3',
    },
    {
      index: 3,
      content: ' En la parte superior de tu muro o línea de tiempo, verás un cuadro de texto que dice "¿Qué estás pensando?". Este es el cuadro donde puedes redactar y publicar tu mensaje.',
      audio: '/assets/audio/facebook/cuartopasomuro.mp3',
    },
    {
      index: 4,
      content: 'Haz clic en el cuadro de estado y comienza a escribir tu mensaje. Puedes incluir texto, enlaces, imágenes, videos y más.',
      audio: '/assets/audio/facebook/quintopasomuro.mp3',
    },
    {
      index: 5,
      content: ' Facebook te permite personalizar tu publicación de varias maneras. Puedes agregar emoticones, mencionar a amigos (usando el símbolo "@" seguido de su nombre), agregar ubicación, y más.',
      audio: '/assets/audio/facebook/sextopasomuro.mp3',
    },
    {
      index: 6,
      content: 'Una vez que hayas redactado tu mensaje y estés satisfecho, haz clic en el botón "Publicar" para compartir tu publicación en tu muro. Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/facebook/septimopasomuro.mp3',
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

  cambiarPantallaP3(event: Event): void {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 29000);
  }

}
