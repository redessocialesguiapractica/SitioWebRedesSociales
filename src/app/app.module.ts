import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HomeNavegadorComponent } from './home/home-navegador/home-navegador.component';
import { HomeTelefonoComponent } from './home/home-telefono/home-telefono.component';
import { AcercaDeNavegadorComponent } from './acercaDe/acerca-de-navegador/acerca-de-navegador.component';
import { AcercaDeTelefonoComponent } from './acercaDe/acerca-de-telefono/acerca-de-telefono.component';
import { AcercaDeComponent } from './acercaDe/acerca-de/acerca-de.component';
import { TutorialesComponent } from './tutoriales/tutoriales/tutoriales.component';
import { TutorialesNavegadorComponent } from './tutoriales/tutoriales-navegador/tutoriales-navegador.component';
import { TutorialesTelefonoComponent } from './tutoriales/tutoriales-telefono/tutoriales-telefono.component';
import { BackButtonComponent } from './compartidos/componentes/back-button/back-button.component';
import { RegistroFacebookComponent } from './facebook/registro/registro-facebook/registro-facebook.component';
import { RegistroFacebookNavegadorComponent } from './facebook/registro/registro-facebook-navegador/registro-facebook-navegador.component';
import { RegistroFacebookTelefonoComponent } from './facebook/registro/registro-facebook-telefono/registro-facebook-telefono.component';
import { RegistroWhatsappComponent } from './whatsapp/registro/registro-whatsapp/registro-whatsapp.component';
import { RegistroWhatsappTelefonoComponent } from './whatsapp/registro/registro-whatsapp-telefono/registro-whatsapp-telefono.component';
import { RegistroWhatsappNavegadorComponent } from './whatsapp/registro/registro-whatsapp-navegador/registro-whatsapp-navegador.component';
import { RegistroInstagramComponent } from './instagram/registro/registro-instagram/registro-instagram.component';
import { RegistroInstagramTelefonoComponent } from './instagram/registro/registro-instagram-telefono/registro-instagram-telefono.component';
import { RegistroInstagramNavegadorComponent } from './instagram/registro/registro-instagram-navegador/registro-instagram-navegador.component';
import { PhoneInterfaceComponent } from './compartidos/componentes/phone-interface/phone-interface.component';
import { EnDesarrolloComponent } from './compartidos/screens/en-desarrollo/en-desarrollo.component';
import { LoginFacebookComponent } from './facebook/login/login-facebook/login-facebook.component';
import { LoginFacebookNavegadorComponent } from './facebook/login/login-facebook-navegador/login-facebook-navegador.component';
import { AgregarAmigosComponent } from './facebook/agregarAmigos/agregar-amigos/agregar-amigos.component';
import { AgregarAmigosNavegadorComponent } from './facebook/agregarAmigos/agregar-amigos-navegador/agregar-amigos-navegador.component';
import { EnviarMensajesComponent } from './facebook/enviarMensajes/enviar-mensajes/enviar-mensajes.component';
import { EnviarMensajesNavegadorComponent } from './facebook/enviarMensajes/enviar-mensajes-navegador/enviar-mensajes-navegador.component';
import { HacerLlamadasComponent } from './facebook/hacerLlamadas/hacer-llamadas/hacer-llamadas.component';
import { HacerLlamadasNavegadorComponent } from './facebook/hacerLlamadas/hacer-llamadas-navegador/hacer-llamadas-navegador.component';
import { PublicarEnMuroComponent } from './facebook/publicarEnMuro/publicar-en-muro/publicar-en-muro.component';
import { PublicarEnMuroNavegadorComponent } from './facebook/publicarEnMuro/publicar-en-muro-navegador/publicar-en-muro-navegador.component';
import { ElegirPersonaEnviarMensajeComponent } from './whatsapp/elegirPersonaEnviarMensaje/elegir-persona-enviar-mensaje/elegir-persona-enviar-mensaje.component';
import { ElegirPersonaEnviarMensajeNavegadorComponent } from './whatsapp/elegirPersonaEnviarMensaje/elegir-persona-enviar-mensaje-navegador/elegir-persona-enviar-mensaje-navegador.component';
import { SubirYVerEstadosComponent } from './whatsapp/subirYVerEstados/subir-yver-estados/subir-yver-estados.component';
import { SubirYVerEstadosNavegadorComponent } from './whatsapp/subirYVerEstados/subir-yver-estados-navegador/subir-yver-estados-navegador.component';
import { HacerYRecibirLlamadasComponent } from './whatsapp/hacerYRecibirLlamadas/hacer-yrecibir-llamadas/hacer-yrecibir-llamadas.component';
import { HacerYRecibirLlamadasNavegadorComponent } from './whatsapp/hacerYRecibirLlamadas/hacer-yrecibir-llamadas-navegador/hacer-yrecibir-llamadas-navegador.component';
import { BloqueoNumerosDesconocidosComponent } from './whatsapp/bloqueoNumerosDesconocidos/bloqueo-numeros-desconocidos/bloqueo-numeros-desconocidos.component';
import { BloqueoNumerosDesconocidosNavegadorComponent } from './whatsapp/bloqueoNumerosDesconocidos/bloqueo-numeros-desconocidos-navegador/bloqueo-numeros-desconocidos-navegador.component';
import { CambiarFotoPerfilComponent } from './whatsapp/cambiarFotoPerfil/cambiar-foto-perfil/cambiar-foto-perfil.component';
import { CambiarFotoPerfilNavegadorComponent } from './whatsapp/cambiarFotoPerfil/cambiar-foto-perfil-navegador/cambiar-foto-perfil-navegador.component';
import { LoginInstagramComponent } from './instagram/login/login-instagram/login-instagram.component';
import { LoginInstagramNavegadorComponent } from './instagram/login/login-instagram-navegador/login-instagram-navegador.component';
import { BusquedaInstagramComponent } from './instagram/busqueda/busqueda-instagram/busqueda-instagram.component';
import { BusquedaInstagramNavegadorComponent } from './instagram/busqueda/busqueda-instagram-navegador/busqueda-instagram-navegador.component';
import { BarraNavegacionInstagramComponent } from './instagram/barraNavegacionInstagram/barra-navegacion-instagram/barra-navegacion-instagram.component';
import { BarraNavegacionInstagramNavegadorComponent } from './instagram/barraNavegacionInstagram/barra-navegacion-instagram-navegador/barra-navegacion-instagram-navegador.component';
import { HistoriasInstagramComponent } from './instagram/historiasInstagram/historias-instagram/historias-instagram.component';
import { HistoriasInstagramNavegadorComponent } from './instagram/historiasInstagram/historias-instagram-navegador/historias-instagram-navegador.component';
import { LikesInstagramComponent } from './instagram/likesInstagram/likes-instagram/likes-instagram.component';
import { LikesInstagramNavegadorComponent } from './instagram/likesInstagram/likes-instagram-navegador/likes-instagram-navegador.component';
import { AudioInstruccionesComponent } from './compartidos/componentes/audio-instrucciones/audio-instrucciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavegadorComponent,
    HomeTelefonoComponent,
    AcercaDeNavegadorComponent,
    AcercaDeTelefonoComponent,
    AcercaDeComponent,
    TutorialesComponent,
    TutorialesNavegadorComponent,
    TutorialesTelefonoComponent,
    BackButtonComponent,
    RegistroFacebookComponent,
    RegistroFacebookNavegadorComponent,
    RegistroFacebookTelefonoComponent,
    RegistroWhatsappComponent,
    RegistroWhatsappTelefonoComponent,
    RegistroWhatsappNavegadorComponent,
    RegistroInstagramComponent,
    RegistroInstagramTelefonoComponent,
    RegistroInstagramNavegadorComponent,
    PhoneInterfaceComponent,
    EnDesarrolloComponent,
    LoginFacebookComponent,
    LoginFacebookNavegadorComponent,
    AgregarAmigosComponent,
    AgregarAmigosNavegadorComponent,
    EnviarMensajesComponent,
    EnviarMensajesNavegadorComponent,
    HacerLlamadasComponent,
    HacerLlamadasNavegadorComponent,
    PublicarEnMuroComponent,
    PublicarEnMuroNavegadorComponent,
    ElegirPersonaEnviarMensajeComponent,
    ElegirPersonaEnviarMensajeNavegadorComponent,
    SubirYVerEstadosComponent,
    SubirYVerEstadosNavegadorComponent,
    HacerYRecibirLlamadasComponent,
    HacerYRecibirLlamadasNavegadorComponent,
    BloqueoNumerosDesconocidosComponent,
    BloqueoNumerosDesconocidosNavegadorComponent,
    CambiarFotoPerfilComponent,
    CambiarFotoPerfilNavegadorComponent,
    LoginInstagramComponent,
    LoginInstagramNavegadorComponent,
    BusquedaInstagramComponent,
    BusquedaInstagramNavegadorComponent,
    BarraNavegacionInstagramComponent,
    BarraNavegacionInstagramNavegadorComponent,
    HistoriasInstagramComponent,
    HistoriasInstagramNavegadorComponent,
    LikesInstagramComponent,
    LikesInstagramNavegadorComponent,
    AudioInstruccionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }