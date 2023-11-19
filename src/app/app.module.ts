import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeverlandComponent } from './modules/neverland/neverland.component';
import { DescriptionInfoComponent } from './shared/components/description-info/description-info.component';
import { LeftNavComponentComponent } from './shared/components/left-nav-component/left-nav-component.component';
import { MessagePopupComponent } from './shared/components/message-popup/message-popup.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { PromptDetailDialogComponent } from './shared/components/prompt-detail-dialog/prompt-detail-dialog.component';
import { RequestFeatureComponent } from './shared/components/request-feature/request-feature.component';
import { TermsOfUsePopupComponent } from './shared/components/terms-of-use-popup/terms-of-use-popup.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { initializeKeycloak } from './core/services/keycloak/mid.keycloak.service';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak
//       .init({
//         config: {
//           url: 'http://localhost:9090',
//           realm: 'master',
//           clientId: 'optimus',
//         },
//         initOptions: {
//           onLoad: 'check-sso', // allowed values 'login-required', 'check-sso';
//           flow: 'standard', // allowed values 'standard', 'implicit', 'hybrid';
//         },
//       })
//       .then((authenticated) => {
//         console.log({ authenticated });
//       });
// }

const initKeycloak = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService],
};

@NgModule({
  declarations: [
    AppComponent,
    NeverlandComponent,
    LeftNavComponentComponent,
    DescriptionInfoComponent,
    PromptDetailDialogComponent,
    TermsOfUsePopupComponent,
    MessagePopupComponent,
    RequestFeatureComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [initKeycloak],
  bootstrap: [AppComponent],
})
export class AppModule {}
