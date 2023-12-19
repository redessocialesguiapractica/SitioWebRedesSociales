import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TutorialesComponent } from './tutoriales/tutoriales/tutoriales.component';
import { TutorialesNavegadorComponent } from './tutoriales/tutoriales-navegador/tutoriales-navegador.component';
import { TutorialesTelefonoComponent } from './tutoriales/tutoriales-telefono/tutoriales-telefono.component';
import { RegistroFacebookComponent } from './facebook/registro/registro-facebook/registro-facebook.component';
import { RegistroFacebookNavegadorComponent } from './facebook/registro/registro-facebook-navegador/registro-facebook-navegador.component';
import { RegistroFacebookTelefonoComponent } from './facebook/registro/registro-facebook-telefono/registro-facebook-telefono.component';
import { RegistroWhatsappComponent } from './whatsapp/registro/registro-whatsapp/registro-whatsapp.component';
import { RegistroWhatsappNavegadorComponent } from './whatsapp/registro/registro-whatsapp-navegador/registro-whatsapp-navegador.component';
import { RegistroWhatsappTelefonoComponent } from './whatsapp/registro/registro-whatsapp-telefono/registro-whatsapp-telefono.component';
import { RegistroInstagramComponent } from './instagram/registro/registro-instagram/registro-instagram.component';
import { RegistroInstagramNavegadorComponent } from './instagram/registro/registro-instagram-navegador/registro-instagram-navegador.component';
import { RegistroInstagramTelefonoComponent } from './instagram/registro/registro-instagram-telefono/registro-instagram-telefono.component';
import { LoginFacebookComponent } from './facebook/login/login-facebook/login-facebook.component';
import { EnDesarrolloComponent } from './compartidos/screens/en-desarrollo/en-desarrollo.component';
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


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent, 
    children: [
      { path: 'navegador', component: TutorialesNavegadorComponent },
      { path: 'telefono', component: TutorialesTelefonoComponent },
    ]
  },
  {
    path: 'tutoriales/:device/facebook/registro', 
    component: RegistroFacebookComponent, 
    children: [
      { path: 'navegador', component: RegistroFacebookNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/facebook/login', 
    component: LoginFacebookComponent, 
    children: [
      { path: 'navegador', component: LoginFacebookNavegadorComponent},
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/facebook/agregarAmigos', 
    component: AgregarAmigosComponent, 
    children: [
      { path: 'navegador', component: AgregarAmigosNavegadorComponent},
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/facebook/enviarMensajes', 
    component: EnviarMensajesComponent, 
    children: [
      { path: 'navegador', component: EnviarMensajesNavegadorComponent},
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/facebook/hacerLlamadas', 
    component: HacerLlamadasComponent, 
    children: [
      { path: 'navegador', component: HacerLlamadasNavegadorComponent},
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/facebook/publicarEnMuro', 
    component: PublicarEnMuroComponent,
    children: [
      { path: 'navegador', component: PublicarEnMuroNavegadorComponent},
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/whatsapp/registro', 
    component: RegistroWhatsappComponent, 
    children: [
      { path: 'navegador', component: RegistroWhatsappNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/whatsapp/elegirPersonaEnviarMensaje', 
    component: ElegirPersonaEnviarMensajeComponent, 
    children: [
      { path: 'navegador', component: ElegirPersonaEnviarMensajeNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/whatsapp/subirYVerEstados', 
    component: SubirYVerEstadosComponent,
    children: [
      { path: 'navegador', component: SubirYVerEstadosNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/whatsapp/hacerYRecibirLlamadas', 
    component: HacerYRecibirLlamadasComponent,
    children: [
      { path: 'navegador', component: HacerYRecibirLlamadasNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/whatsapp/bloqueoNumerosDesconocidos', 
    component: BloqueoNumerosDesconocidosComponent,
    children: [
      { path: 'navegador', component: BloqueoNumerosDesconocidosNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/whatsapp/cambiarFotoPerfil', 
    component: CambiarFotoPerfilComponent,
    children: [
      { path: 'navegador', component: CambiarFotoPerfilNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },


  {
    path: 'tutoriales/:device/instagram/registro', 
    component: RegistroInstagramComponent, 
    children: [
      { path: 'navegador', component: RegistroInstagramNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/instagram/login', 
    component: LoginInstagramComponent,
    children: [
      { path: 'navegador', component: LoginInstagramNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/instagram/busqueda', 
    component: BusquedaInstagramComponent,
    children: [
      { path: 'navegador', component: BusquedaInstagramNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/instagram/barraNavegacion', 
    component: BarraNavegacionInstagramComponent,
    children: [
      { path: 'navegador', component: BarraNavegacionInstagramNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/instagram/historias', 
    component: HistoriasInstagramComponent,
    children: [
      { path: 'navegador', component: HistoriasInstagramNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },
  {
    path: 'tutoriales/:device/instagram/likes', 
    component: LikesInstagramComponent,
    children: [
      { path: 'navegador', component: LikesInstagramNavegadorComponent },
      { path: 'telefono', component: EnDesarrolloComponent },
    ]
  },





  {
    path: 'tutoriales/:device/:socialNetwork', 
    component: TutorialesComponent,
    children: [
      { path: 'navegador', component: TutorialesNavegadorComponent },
      { path: 'telefono', component: TutorialesTelefonoComponent },
    ],
  },
  





 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}