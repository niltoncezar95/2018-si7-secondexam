import { TestBed, inject } from '@angular/core/testing';

import { SelecaoService } from './selecao.service';

describe('SelecaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelecaoService]
    });
  });

  it('should be created', inject([SelecaoService], (service: SelecaoService) => {
    expect(service).toBeTruthy();
  }));
});
