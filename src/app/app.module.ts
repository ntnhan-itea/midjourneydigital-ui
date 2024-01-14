import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { initializeKeycloak } from './core/services/keycloak/mid.keycloak.service';
import { HttpLoaderFactory } from './core/services/translation/custom-translate-loader.service';
import { AppFooterComponent } from './modules/app-footer/app-footer.component';
import { AppHeaderComponent } from './modules/app-header/app-header.component';
import { MessagePopupComponent } from "./shared/components/message-popup/message-popup.component";

const initKeycloak = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService],
};

@NgModule({
  declarations: [AppComponent, AppFooterComponent, AppHeaderComponent, MessagePopupComponent],
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
    StoreModule.forRoot({}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

  ],
  // providers: [initKeycloak],
  bootstrap: [AppComponent],
})
export class AppModule {
}
