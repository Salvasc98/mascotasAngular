import { TestBed } from '@angular/core/testing';

import { GestAlumnosService } from './macotas.service';

describe('GestAlumnosService', () => {
  let service: GestAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
