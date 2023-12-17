import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { MidjourneydigitalService } from './core/services/api/midjourneydigital.service';
import { initializeKeycloak } from './core/services/keycloak/mid.keycloak.service';
import { MessagePopupService } from './shared/components/message-popup/message-popup.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NeverlandEffects } from './modules/neverland/state/neverland.effects';
import { NEVER_LAND_REDUCER_NAME, productReducer } from './modules/neverland/state/neverland.reducer';

const initKeycloak = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService],
};

@NgModule({
  declarations: [AppComponent, PrivacyPolicyComponent],
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
    EffectsModule.forRoot([]),
    StoreModule.forRoot({})
  ],
  providers: [initKeycloak, MessagePopupService, MidjourneydigitalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
