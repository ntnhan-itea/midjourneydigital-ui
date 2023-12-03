import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {MidKeycloakService} from "../../../core/services/keycloak/mid.keycloak.service";

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  private actionFuncs: Function[] = [];
  private confirmationSubject = new Subject<string>();

  readonly LOGIN_CONFIRM_MESSAGE: string = "This page require to login";

  constructor(private midKeycloakService: MidKeycloakService) {
  }

  show(message: string, confirmActionCallback?: Function): void {
    this.confirmationSubject.next(message);
    this._addNewFunction(confirmActionCallback)
  }

  requireConfirmLogin(): Observable<boolean> {
    if (this.midKeycloakService.isAuthenticated()) {
      return of(true);
    }

    this.confirmationSubject.next(this.LOGIN_CONFIRM_MESSAGE);
    this._addNewFunction(this.midKeycloakService.getRequireLoginFn());
    return this.midKeycloakService.getLoginProcessObservable();
  }

  performFunction(): void {
    this.actionFuncs.forEach(fn => fn());
  }

  getConfirmationMessage(): Observable<string> {
    return this.confirmationSubject.asObservable();
  }

  private _addNewFunction(fn?: Function) {
    if (!fn) {
      this.actionFuncs = [];
      return
    }

    this.actionFuncs = [fn];
  }

}
