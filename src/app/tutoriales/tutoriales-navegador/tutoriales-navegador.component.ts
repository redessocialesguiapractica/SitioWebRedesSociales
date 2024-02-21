import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutoriales-navegador',
  templateUrl: './tutoriales-navegador.component.html',
  styleUrls: ['./tutoriales-navegador.component.css']
})
export class TutorialesNavegadorComponent {
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
          { title: 'Registro en Facebook', description: 'Aprende a crear una cuenta en Facebook.', image: 'assets/images/imagesHome/imagenes_tutoriales/registro.png', type: 'registro'},
          { title: 'Iniciar sesión en Facebook', description: 'Descubre cómo iniciar sesión en Facebook.', image: 'assets/images/imagesHome/imagenes_tutoriales/iniciar.png', type: 'login' },
          { title: 'Agregar amigos en Facebook', description: 'Conoce cómo puedes agregar amigos en Facebook.', image: 'assets/images/imagesHome/imagenes_tutoriales/agregar.png', type: 'agregarAmigos' },
          { title: 'Enviar mensajes en Facebook', description: 'Aprende a enviar mensajes a tus amigos en Facebook.', image: 'assets/images/imagesHome/imagenes_tutoriales/mensaje.png', type: 'enviarMensajes' },
          { title: 'Hacer llamadas en Facebook', description: 'Descubre cómo hacer llamadas en Facebook.', image: 'assets/images/imagesHome/imagenes_tutoriales/llamada.png', type: 'hacerLlamadas' },
          { title: 'Publicar en Facebook', description: 'Aprende a publicar en tu muro de Facebook.', image: 'assets/images/imagesHome/imagenes_tutoriales/publicar.png', type: 'publicarEnMuro' },
        ]
      },
      {
        name: 'whatsapp',
        tutorials: [
          { title: 'Registro en WhatsApp', description: 'Aprende a crear una cuenta en WhatsApp.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_whatsapp/registro_whatsapp.png', type: 'registro'},
          { title: 'Enviar mensajes en WhatsApp', description: 'Aprende a enviar mensajes, usar emoticones y stickers, adjuntar archivos e imágenes. Grabar audios.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_whatsapp/mensajes_whatsapp.png', type: 'elegirPersonaEnviarMensaje' },
          { title: 'Subir y ver estados en WhatsApp', description: 'Descubre cómo subir y ver estados en WhatsApp.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_whatsapp/estados_whatsapp.png', type: 'subirYVerEstados' },
          { title: 'Hacer y recibir llamadas/videollamadas en WhatsApp', description: 'Aprende a hacer y recibir llamadas y videollamadas en WhatsApp.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_whatsapp/llamadas_whatsapp.png', type: 'hacerYRecibirLlamadas' },
          { title: 'Bloqueo de números desconocidos en WhatsApp', description: 'Descubre cómo bloquear números desconocidos en WhatsApp.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_whatsapp/bloquear_whatsapp.png', type: 'bloqueoNumerosDesconocidos' },
          { title: 'Cambiar foto de perfil en WhatsApp', description: 'Aprende a cambiar tu foto de perfil en WhatsApp.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_whatsapp/foto_whatsapp.png', type: 'cambiarFotoPerfil' },
        ]
      },
      {
        name: 'instagram',
        tutorials: [
          { title: 'Registro en Instagram', description: 'Aprende a crear una cuenta en Instagram.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_instagram/registroInstagram.png', type: 'registro'},
          { title: 'Iniciar sesión en Instagram', description: 'Descubre cómo iniciar sesión en Instagram.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_instagram/sesionInstagram.png', type: 'login' },
          { title: 'Búsqueda en Instagram', description: 'Explora cómo realizar búsquedas en Instagram.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_instagram/buscarInstagram.png', type: 'busqueda' },
          { title: 'Barra de navegación de Instagram', description: 'Conoce la barra de navegación de Instagram.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_instagram/navegacionInstagram.png', type: 'barraNavegacion' },
          { title: 'Historias en Instagram', description: 'Aprende a publicar historias en Instagram.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_instagram/historiasInstragram.png', type: 'historias' },
          { title: 'Likes en Instagram', description: 'Descubre cómo dar likes en Instagram.', image: 'assets/images/imagesHome/imagenes_tutoriales/tutoriales_instagram/likesInstragram.png', type: 'likes' },
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
        return '#478bfc';
      case 'whatsapp':
        return '#6EB56F';
      case 'instagram':
        return '#FC8A7B';
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