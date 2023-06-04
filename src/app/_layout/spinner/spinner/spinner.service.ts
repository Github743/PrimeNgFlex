import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class SpinnerService {

  private visibleSubject = new ReplaySubject<boolean>(1);
  get visible(): Observable<boolean> { return this.visibleSubject.asObservable(); }

  constructor() {
    this.visibleSubject.next(false);
  }

  startSpinner = () => {
    this.visibleSubject.next(true);
  }

  stopSpinner = () => {
    this.visibleSubject.next(false);
  }

}
