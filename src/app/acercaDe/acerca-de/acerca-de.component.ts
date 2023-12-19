import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
