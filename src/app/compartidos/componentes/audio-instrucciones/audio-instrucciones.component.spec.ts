import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioInstruccionesComponent } from './audio-instrucciones.component';

describe('AudioInstruccionesComponent', () => {
  let component: AudioInstruccionesComponent;
  let fixture: ComponentFixture<AudioInstruccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioInstruccionesComponent]
    });
    fixture = TestBed.createComponent(AudioInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
