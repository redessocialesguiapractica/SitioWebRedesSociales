import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';

@Component({
  selector: 'app-subir-yver-estados',
  templateUrl: './subir-yver-estados.component.html',
  styleUrls: ['./subir-yver-estados.component.css']
})
export class SubirYVerEstadosComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
