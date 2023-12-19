import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tutoriales-telefono',
  templateUrl: './tutoriales-telefono.component.html',
  styleUrls: ['./tutoriales-telefono.component.css']
})
export class TutorialesTelefonoComponent {
  socialNetwork: string | undefined;
  tutorials: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.socialNetwork = undefined;
    this.loadTutorials();
  }

  private loadTutorials(): void {
    // Your existing data with added image property
    const socialNetworksData = [
      {
        name: 'facebook',
        tutorials: [
          { title: 'Registro en Facebook', description: 'Aprende a crear una cuenta en Facebook.', image: '/assets/images/imagesTutoriales/facebookLogin.png', type: 'registro'},
          { title: 'Iniciar sesión en Facebook', description: 'Descubre cómo iniciar sesión en Facebook.', image: 'facebook_image_url', type: 'login' },
          { title: 'Agregar amigos en Facebook', description: 'Conoce cómo puedes agregar amigos en Facebook.', image: 'facebook_image_url', type: 'agregarAmigos' },
          { title: 'Enviar mensajes a amigos en Facebook', description: 'Aprende a enviar mensajes a tus amigos en Facebook.', image: 'facebook_image_url', type: 'enviarMensajes' },
          { title: 'Hacer llamadas en Facebook', description: 'Descubre cómo hacer llamadas en Facebook.', image: 'facebook_image_url', type: 'hacerLlamadas' },
          { title: 'Publicar en el muro de Facebook', description: 'Aprende a publicar en tu muro de Facebook.', image: 'facebook_image_url', type: 'publicarEnMuro' },
        ]
      },
      {
        name: 'whatsapp',
        tutorials: [
          { title: 'Registro en WhatsApp', description: 'Aprende a crear una cuenta en WhatsApp.', image: 'whatsapp_image_url', type: 'registro'},
          { title: 'Elegir persona a la que enviar un mensaje en WhatsApp', description: 'Adjuntar archivos, enviar imágenes. Grabar audios. Agregar y usar emoticones y stickers.', image: 'whatsapp_image_url', type: 'elegirPersonaEnviarMensaje' },
          { title: 'Subir y ver estados en WhatsApp', description: 'Descubre cómo subir y ver estados en WhatsApp.', image: 'whatsapp_image_url', type: 'subirYVerEstados' },
          { title: 'Hacer y recibir llamadas/videollamadas en WhatsApp', description: 'Aprende a hacer y recibir llamadas y videollamadas en WhatsApp.', image: 'whatsapp_image_url', type: 'hacerYRecibirLlamadas' },
          { title: 'Bloqueo de números desconocidos en WhatsApp', description: 'Descubre cómo bloquear números desconocidos en WhatsApp.', image: 'whatsapp_image_url', type: 'bloqueoNumerosDesconocidos' },
          { title: 'Cambiar foto de perfil en WhatsApp', description: 'Aprende a cambiar tu foto de perfil en WhatsApp.', image: 'whatsapp_image_url', type: 'cambiarFotoPerfil' },
        ]
      },
      {
        name: 'instagram',
        tutorials: [
          { title: 'Registro en Instagram', description: 'Aprende a crear una cuenta en Instagram.', image: 'instagram_image_url', type: 'registro'},
          { title: 'Iniciar sesión en Instagram', description: 'Descubre cómo iniciar sesión en Instagram.', image: 'instagram_image_url', type: 'login' },
          { title: 'Búsqueda en Instagram', description: 'Explora cómo realizar búsquedas en Instagram.', image: 'instagram_image_url', type: 'busqueda' },
          { title: 'Barra de navegación en Instagram', description: 'Conoce la barra de navegación de Instagram.', image: 'instagram_image_url', type: 'barraNavegacion' },
          { title: 'Historias en Instagram', description: 'Aprende a utilizar las historias en Instagram.', image: 'instagram_image_url', type: 'historias' },
          { title: 'Likes en Instagram', description: 'Descubre cómo dar likes en Instagram.', image: 'instagram_image_url', type: 'likes' },
        ]
      },
      {
        name: 'gmail',
        tutorials: [
          { title: 'Registro en Gmail', description: 'Aprende a crear una cuenta de correo electrónico en Gmail.', image: 'gmail_image_url' },
        ]
      }
    ];

    // Get the social network from the route
    this.route.params.subscribe(params => {
      this.socialNetwork = params['socialNetwork'];
      const selectedNetwork = socialNetworksData.find(network => network.name === this.socialNetwork);

      if (selectedNetwork) {
        this.tutorials = selectedNetwork.tutorials;
      }
    });
  }
  getFontColor(): string {
    switch (this.socialNetwork) {
      case 'facebook':
        return '#0865FF';
      case 'whatsapp':
        return '#18B828';
      case 'instagram':
        return '#FC7F26';
      case 'gmail':
        return '#DD3131';
      default:
        return '#000000'; // Default font color if social network is not recognized
    }
  }
  getBackgroundColor(): string {
    switch (this.socialNetwork) {
      case 'facebook':
        return '#0867ff18';
      case 'whatsapp':
        return '#49c9581c';
      case 'instagram':
        return '#ff88001c';
      case 'gmail':
        return '#ff00001c';
      default:
        return ''; // Default background color if social network is not recognized
    }
  }
}