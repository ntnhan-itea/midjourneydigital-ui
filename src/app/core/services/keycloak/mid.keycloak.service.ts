import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MidKeycloakService {
  private loginProcess$ = new BehaviorSubject<boolean>(false);

  constructor(private keycloak: KeycloakService) {
  }

  isAuthenticated(): boolean {
    return !!this.keycloak?.getKeycloakInstance()?.authenticated;
  }

  logout(): Promise<void> {
    return this.keycloak.logout();
  }

  async login(): Promise<void> {
    return await this.keycloak.login()
      .then(() => this.loginProcess$.next(true))
      .catch(() => this.loginProcess$.next(false));
  }

  requireLogin(): Promise<void> {
    if (this.isAuthenticated()) {
      return Promise.resolve();
    }

    return this.login();
  }

  getRequireLoginFn(): () => void {
    return this.requireLogin.bind(this);
  }

  getLoginProcessObservable(): Observable<boolean> {
    if (this.isAuthenticated()) {
      return of(true);
    }
    return this.loginProcess$.asObservable();
  }

}

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak
      .init({
        config: {
          url: 'http://localhost:9090',
          realm: 'master',
          clientId: 'optimus',
        },
        initOptions: {
          onLoad: 'check-sso', // allowed values 'login-required', 'check-sso';
          flow: 'standard', // allowed values 'standard', 'implicit', 'hybrid';
        },
      })
      .then((authenticated) => {
        console.log({authenticated});
      });
}
