import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.css']
})
export class TutorialesComponent {
  isMobileDevice: boolean | undefined;
  socialNetwork: string | undefined;

  constructor(
    private dispositivoService: DetectarDispositivoService,
    private route: ActivatedRoute
  ) {
    this.isMobileDevice = false;
    this.socialNetwork = undefined;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();

    // Obtener el nombre de la red social desde la ruta
    this.route.url.subscribe(segments => {
      if (segments.length > 2) {
        this.socialNetwork = segments[2].path;
      }
    });
  }
}