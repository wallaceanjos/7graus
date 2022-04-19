import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudService } from './crud.service';

describe('Service: Crud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('Deve criar um service usando httpClient', inject([CrudService], (service: CrudService) => {
    expect(service).toBeTruthy();
  }));
});
