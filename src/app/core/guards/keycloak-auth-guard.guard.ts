import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MidKeycloakService } from '../services/keycloak/mid.keycloak.service';

@Injectable({
  providedIn: 'root',
})
export class KeycloakAuthGuardGuard {
  constructor(private midKeycloakService: MidKeycloakService) {}

  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.midKeycloakService.isAuthenticated()) {
      return true;
    }

    this.midKeycloakService.login();
    return false;
  }
}
