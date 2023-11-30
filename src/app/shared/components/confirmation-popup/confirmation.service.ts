import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  private actionFuncs: Function[] = [];

  constructor() {}

  private confirmationSubject = new Subject<string>();
  confirmationMessage$ = this.confirmationSubject.asObservable();

  show(message: string, confirmActionCallback: Function) {
    this.confirmationSubject.next(message);
    this.actionFuncs = [confirmActionCallback];
  }

  actionFn() {
    this.actionFuncs.forEach(fn => fn());
  }
}
