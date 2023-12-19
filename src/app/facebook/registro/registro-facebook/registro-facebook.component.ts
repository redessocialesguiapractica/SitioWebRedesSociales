import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';
@Component({
  selector: 'app-registro-facebook',
  templateUrl: './registro-facebook.component.html',
  styleUrls: ['./registro-facebook.component.css']
})
export class RegistroFacebookComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
