import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';

@Component({
  selector: 'app-hacer-yrecibir-llamadas',
  templateUrl: './hacer-yrecibir-llamadas.component.html',
  styleUrls: ['./hacer-yrecibir-llamadas.component.css']
})
export class HacerYRecibirLlamadasComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
