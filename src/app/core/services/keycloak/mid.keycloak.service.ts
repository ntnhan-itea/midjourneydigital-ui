import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class MidKeycloakService {
  constructor(private keycloak: KeycloakService) {
    // this._initializeKeycloak();
  }

  isAuthenticated(): boolean {
    return !!this.keycloak?.getKeycloakInstance()?.authenticated;
  }

  logout() {
    this.keycloak.logout();
  }

  login() {
    this.keycloak.login();
  }

  requireLogin() {
    if(!this.isAuthenticated()) {
      this.login();
    }
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
        console.log({ authenticated });
      });
}
