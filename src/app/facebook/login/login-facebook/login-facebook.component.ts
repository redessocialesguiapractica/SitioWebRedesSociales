import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';
@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.css']
})
export class LoginFacebookComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
