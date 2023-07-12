import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
