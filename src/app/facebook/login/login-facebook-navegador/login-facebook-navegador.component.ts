import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-facebook-navegador',
  templateUrl: './login-facebook-navegador.component.html',
  styleUrls: ['./login-facebook-navegador.component.css']
})
export class LoginFacebookNavegadorComponent implements OnInit {
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
      content: 'Una vez instalada la aplicación en tu dispositivo, debes dar clic en el icono de Facebook que aparecerá en tu dispositivo, para poder acceder a la aplicación y proceder a registrarte!',
      audio: '/assets/audio/facebook/IngresarFacebook.mp3',
    },
    {
      index: 2,
      content: 'Al abrir la aplicación, es necesario dirigirse al área de las casillas ubicadas debajo del ícono de la aplicación. Estas casillas facilitarán el ingreso a tu cuenta de Facebook. En la primera casilla, se debe ingresar el correo electrónico asociado a la cuenta de Facebook. Una vez completado este paso, procedemos a completar el segundo campo con la contraseña creada durante el proceso de creación de la cuenta. En caso de olvidar la contraseña, Facebook ofrece un enlace con la opción Olvidaste tu contraseña para restablecerla. Si este fuera tu caso, puedes hacer clic en el ícono de un ojo que aparecerá mientras ingreses tu contraseña para verificar la corrección de la misma. Después de verificar si tu correo y contraseña son las correctas, presiona el botón Iniciar sesión.',
      audio: '/assets/audio/facebook/Iniciarsesionfacebook.mp3',
    },
    {
      index: 3,
      content: 'Después de iniciar sesión, es necesario aguardar brevemente, ya que la aplicación está en proceso de validar tus credenciales. Este procedimiento tiene como objetivo confirmar la autenticidad de tu correo electrónico y contraseña. En caso de que la información proporcionada no sea correcta, la aplicación mostrará un mensaje de alerta indicando que las credenciales ingresadas no son válidas.',
      audio: '/assets/audio/facebook/quehacerdespuesdeiniciarsesion.mp3',
    },
    {
      index: 4,
      content: 'En caso de que las credenciales sean válidas, la aplicación redirige al usuario a su área personal, permitiéndole disfrutar de contenido multimedia, como videos e imágenes, además de brindar la posibilidad de mantenerse informado acerca de noticias a nivel mundial.',
      audio: '/assets/audio/facebook/Credencialesvalidas.mp3',
    },
    {
      index: 5,
      content: 'En caso de que las credenciales sean válidas, la aplicación redirige al usuario a su área personal, permitiéndole disfrutar de contenido multimedia, como videos e imágenes, además de brindar la posibilidad de mantenerse informado acerca de noticias a nivel mundial.',
      audio: '',
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
