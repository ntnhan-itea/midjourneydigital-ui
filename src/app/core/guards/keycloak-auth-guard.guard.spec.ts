import { TestBed } from '@angular/core/testing';

import { KeycloakAuthGuardGuard } from './keycloak-auth-guard.guard';

describe('KeycloakAuthGuardGuard', () => {
  let guard: KeycloakAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KeycloakAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
