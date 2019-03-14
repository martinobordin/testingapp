import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { SampleService } from './sample.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const fakeSampleService = {
  getValue: () => SampleService.value,
  getObservableValue: () => of(SampleService.value)
};

const sampleServiceSpy = jasmine.createSpyObj('SampleService', ['getValue', 'getObservableValue', 'getFromApi']);

describe('MasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // SampleService,
      { provide: SampleService, useValue: fakeSampleService },
      MasterService,
      { provide: HttpClient, useValue: null }
    ]
  }));

  it('should be created', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service).toBeTruthy();
  });

  it('should be return value', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service.getValue()).toEqual(SampleService.value);
  });

  it('should be return observable value', (done: DoneFn) => {
    const service: MasterService = TestBed.get(MasterService);
    service.getObservableValue().subscribe(result => {
      expect(result).toEqual(SampleService.value);
      done();
    });
  });


  it('should be return value with Spy', () => {
    sampleServiceSpy.getValue.and.returnValue(SampleService.value);
    const service: MasterService = new MasterService(sampleServiceSpy);
    expect(service.getValue()).toEqual(SampleService.value);
  });

  it('should be return observable value with Spy', (done: DoneFn) => {
    sampleServiceSpy.getObservableValue.and.returnValue(of(SampleService.value));
    const service: MasterService = new MasterService(sampleServiceSpy);
    service.getObservableValue().subscribe(result => {
      expect(result).toEqual(SampleService.value);
      done();
    });
  });

  it('should be return from API with Spy', (done: DoneFn) => {
    sampleServiceSpy.getFromApi.and.returnValue(of(SampleService.user));
    const service: MasterService = new MasterService(sampleServiceSpy);
    service.getFromApi().subscribe(result => {
      expect(result).toEqual(SampleService.user);
      done();
    });
  });

});
