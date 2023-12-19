import { TestBed } from '@angular/core/testing';

import { DetectarDispositivoService } from './detectar-dispositivo.service';

describe('DetectarDispositivoService', () => {
  let service: DetectarDispositivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectarDispositivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
