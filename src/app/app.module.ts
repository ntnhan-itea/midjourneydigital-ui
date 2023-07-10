import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeverlandComponent } from './modules/neverland/neverland.component';
import { DescriptionInfoComponent } from './shared/components/description-info/description-info.component';
import { LeftNavComponentComponent } from './shared/components/left-nav-component/left-nav-component.component';
import { MessagePopupComponent } from './shared/components/message-popup/message-popup.component';
import { PromptDetailDialogComponent } from './shared/components/prompt-detail-dialog/prompt-detail-dialog.component';
import { TermsOfUsePopupComponent } from './shared/components/terms-of-use-popup/terms-of-use-popup.component';
import { RequestFeatureComponent } from './shared/components/request-feature/request-feature.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
