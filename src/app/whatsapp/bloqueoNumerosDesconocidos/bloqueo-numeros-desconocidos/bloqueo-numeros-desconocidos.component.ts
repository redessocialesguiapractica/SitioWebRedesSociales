import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';

@Component({
  selector: 'app-bloqueo-numeros-desconocidos',
  templateUrl: './bloqueo-numeros-desconocidos.component.html',
  styleUrls: ['./bloqueo-numeros-desconocidos.component.css']
})
export class BloqueoNumerosDesconocidosComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
