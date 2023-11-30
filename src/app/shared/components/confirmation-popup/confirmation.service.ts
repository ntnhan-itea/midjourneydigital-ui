import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor() {}

  private confirmationSubject = new Subject<string>();
  confirmationMessage$ = this.confirmationSubject.asObservable();

  private confirmActionCallbackSubject = new BehaviorSubject<Function>(
    () => {}
  );
  confirmActionCallback$ = this.confirmActionCallbackSubject.asObservable();

  show(message: string, confirmActionCallback: Function) {
    this.confirmationSubject.next(message);

    this.confirmActionCallbackSubject = new BehaviorSubject<Function>(
      () => {}
    );
    this.confirmActionCallbackSubject.next(confirmActionCallback);
  }

  actionFn() {
    this.confirmActionCallback$.subscribe(fn => fn());  
  }

  

}
