import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-instagram-navegador',
  templateUrl: './login-instagram-navegador.component.html',
  styleUrls: ['./login-instagram-navegador.component.css'],
})
export class LoginInstagramNavegadorComponent implements OnInit {
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
        '¡Bienvenido a este tutorial guiado para iniciar sesión en tu cuenta de Instagram! Además de las instrucciones habladas, también puedes ver las instrucciones escritas en la parte izquierda, en la caja de instrucciones, donde encontrarás varios botones para navegar entre los diferentes pasos. Muy bien, entonces empecemos con el primer paso.',
      audio: '/assets/audio/instagram/iniciarSesion/paso1.mp3',
    },
    {
      index: 2,
      content:
        'En nuestra pantalla principal del teléfono, presionamos el botón que está siendo destacado de nuestra aplicación de Instagram.',
      audio: '/assets/audio/instagram/iniciarSesion/paso2.mp3',
    },
    {
      index: 3,
      content:
        'Una vez que la aplicación se haya cargado, llegarás a la pantalla de inicio de sesión, aquí contamos con dos botones para iniciar sesión en tu cuenta. Si estas en el celular en el que creaste tu cuenta, tus datos de inicio de sesión ya quedaron almacenados, por lo que en ese caso solo deberás pulsar el botón “Iniciar sesión”. Pero si estas en otro dispositivo, debes pulsar el botón “Iniciar sesión en otra cuenta”, botón que está siendo destacado para nuestro ejemplo.',
      audio: '/assets/audio/instagram/iniciarSesion/paso3.mp3',
    },
    {
      index: 4,
      content:
        'En la ventana que se muestra a continuación, nos dirigimos a las casillas ubicadas debajo del ícono de la aplicación, que están siendo señaladas con un rectángulo rojo. En la primera casilla, se debe ingresar el nombre de usuario, correo o celular con el que creaste tu cuenta de Instagram. Una vez completado este paso, procedemos a completar el segundo campo con la contraseña creada durante el proceso de creación de la cuenta, después de verificar si tu usuario y contraseña son las correctas, presiona el botón “Iniciar sesión”, que está siendo indicado en la pantalla.',
      audio: '/assets/audio/instagram/iniciarSesion/paso4.mp3',
    },
    {
      index: 5,
      content:
        'Te aparecerá una ventana en la que se va a solicitar confirmar si deseas “¿Guardar tu información de inicio de sesión? “, con los botones “Guardar” y “Ahora no”. Para nuestro ejemplo presiona el botón “Ahora no” que está siendo destacado.',
      audio: '/assets/audio/instagram/iniciarSesion/paso5.mp3',
    },
    {
      index: 6,
      content:
        'Ahora podrás ver tu página de inicio de Instagram. ¡Felicidades, has completado el tutorial de Iniciar sesión en Instagram! Si quieres ver otros tutoriales, puedes hacerlo pulsando el botón "Regresar", o si necesitas repetir algún paso, puedes hacerlo navegando con los botones de la caja de instrucciones.',
      audio: '/assets/audio/instagram/iniciarSesion/paso6.mp3',
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
  instagramLoginClicked(): void {
    // Call the nextInstruction method or perform other actions specific to index 1
    this.nextInstruction();
  }

  //Method especific for index 4
  instagramLoginP41InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('redessocialesguiapractica@gmail.com')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
    }
  }
  instagramLoginP42InputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchText = target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (searchText.includes('PWRS-V-001')) {
      this.nextInstructionTimer = setTimeout(() => {
        this.nextInstruction();
      }, 2000);
    }
  }
}
