import { Injectable } from '@angular/core';
import { SampleService } from './sample.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Injectable()
export class MasterService {
  constructor(private sampleService: SampleService) { }

  getValue(): string {
    return this.sampleService.getValue();
  }

  getObservableValue(): Observable<string> {
    return this.sampleService.getObservableValue();
  }

  getFromApi(): Observable<User> {
    return this.sampleService.getFromApi();
  }
}
