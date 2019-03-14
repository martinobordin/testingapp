import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      SampleService,
    ]
  }));

  it('should be created', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service).toBeTruthy();
  });

  it('should be return value', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service.getValue()).toEqual(SampleService.value);
  });

  it('should be return observable value', (done: DoneFn) => {
    const service: SampleService = TestBed.get(SampleService);
    service.getObservableValue().subscribe(result => {
      expect(result).toEqual(SampleService.value);
      done();
    });
  });

  it('should be return from API with Spy', (done: DoneFn) => {
    const service: SampleService = TestBed.get(SampleService);

    service.getFromApi().subscribe(result => {
      expect(result).toEqual(SampleService.user);
      done();
    });

    const req = TestBed.get(HttpTestingController).expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(SampleService.user);
  });

});
