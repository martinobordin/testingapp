import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Injectable()
export class SampleService {
  static value = 'myvalue';
  static user: User = { id: 1, name: 'my Name', username: 'My username' };

  constructor(private httpClient: HttpClient) { }

  getValue(): string {
    return SampleService.value;
  }

  getObservableValue(): Observable<string> {
    return of(SampleService.value);
  }

  getFromApi(): Observable<User> {
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }
}

