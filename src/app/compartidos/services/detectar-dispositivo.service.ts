import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class DetectarDispositivoService {
  constructor(private deviceService: DeviceDetectorService) {}

  // Método para detectar si es un dispositivo móvil
  isMobile(): boolean {
    // Utilizar el DeviceDetectorService para comprobar si es un dispositivo móvil
    return this.deviceService.isMobile();
  }
}