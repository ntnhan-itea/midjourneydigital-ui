import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ConfirmationPopupComponent } from 'src/app/shared/components/confirmation-popup/confirmation-popup.component';
import { DescriptionInfoComponent } from 'src/app/shared/components/description-info/description-info.component';
import { LeftNavComponentComponent } from 'src/app/shared/components/left-nav-component/left-nav-component.component';
import { MessagePopupComponent } from 'src/app/shared/components/message-popup/message-popup.component';
import { PromptDetailDialogComponent } from 'src/app/shared/components/prompt-detail-dialog/prompt-detail-dialog.component';
import { RequestFeatureComponent } from 'src/app/shared/components/request-feature/request-feature.component';
import { TermsOfUsePopupComponent } from 'src/app/shared/components/terms-of-use-popup/terms-of-use-popup.component';
import { NeverlandRoutingModule } from './neverland-routing.module';
import { NeverlandComponent } from './neverland.component';

@NgModule({
  declarations: [
    NeverlandComponent,
    LeftNavComponentComponent,
    DescriptionInfoComponent,
    PromptDetailDialogComponent,
    TermsOfUsePopupComponent,
    MessagePopupComponent,
    RequestFeatureComponent,
    ConfirmationPopupComponent,
  ],
  imports: [
    CommonModule,
    NeverlandRoutingModule,
    CollapseModule,
    FormsModule,
    CarouselModule,
  ],
  providers: [],
})
export class NeverlandModule {}
