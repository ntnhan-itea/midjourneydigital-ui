import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeverlandComponent } from './modules/neverland/neverland.component';
import { DescriptionInfoComponent } from './shared/components/description-info/description-info.component';
import { LeftNavComponentComponent } from './shared/components/left-nav-component/left-nav-component.component';
import { MessagePopupComponent } from './shared/components/message-popup/message-popup.component';
import { PromptDetailDialogComponent } from './shared/components/prompt-detail-dialog/prompt-detail-dialog.component';
import { RequestFeatureComponent } from './shared/components/request-feature/request-feature.component';
import { TermsOfUsePopupComponent } from './shared/components/terms-of-use-popup/terms-of-use-popup.component';
import { GoogleLoginComponent } from './shared/components/google-login/google-login.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { FacebookLoginComponent } from './shared/components/facebook-login/facebook-login.component';

// const config: SocialAuthServiceConfig = {
//   autoLogin: false,
//   providers: [
//     {
//       id: GoogleLoginProvider.PROVIDER_ID,
//       provider: new GoogleLoginProvider(
//         '224491911659-73qu807kbajj6q3u4qt7vdab125liia9.apps.googleusercontent.com'
//       )
//     }
//   ]
// };


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
    GoogleLoginComponent,
    PrivacyPolicyComponent,
    FacebookLoginComponent,
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
    SocialLoginModule,
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '224491911659-73qu807kbajj6q3u4qt7vdab125liia9.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1415903539267269')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
