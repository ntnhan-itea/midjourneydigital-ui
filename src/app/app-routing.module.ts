import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {KeycloakAuthGuardGuard} from './core/guards/keycloak-auth-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/neverland/neverland.module').then(
        (m) => m.NeverlandModule
      ),
    canActivate: [() => inject(KeycloakAuthGuardGuard).canActivate()],
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./modules/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
    CommonModule,
    BrowserModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
