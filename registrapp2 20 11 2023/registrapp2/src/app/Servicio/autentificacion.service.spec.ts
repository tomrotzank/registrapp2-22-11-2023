import { TestBed } from '@angular/core/testing';
import { AutentificarService } from './autentificacion.service';

describe('AutentificacionService', () => {
  let service: AutentificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
