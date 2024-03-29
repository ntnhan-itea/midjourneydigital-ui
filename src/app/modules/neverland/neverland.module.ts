import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {DescriptionInfoComponent} from 'src/app/shared/components/description-info/description-info.component';
import {LeftNavComponentComponent} from 'src/app/shared/components/left-nav-component/left-nav-component.component';
import {
  PromptDetailDialogComponent
} from 'src/app/shared/components/prompt-detail-dialog/prompt-detail-dialog.component';
import {RequestFeatureComponent} from 'src/app/shared/components/request-feature/request-feature.component';
import {TermsOfUsePopupComponent} from 'src/app/shared/components/terms-of-use-popup/terms-of-use-popup.component';
import {NeverlandRoutingModule} from './neverland-routing.module';
import {NeverlandComponent} from './neverland.component';
import {EffectsModule} from '@ngrx/effects';
import {NeverlandEffects} from './state/neverland.effects';
import {StoreModule} from '@ngrx/store';
import {TranslateModule} from '@ngx-translate/core';
import {NEVER_LAND_STATE_NAME} from "./state/neverland-state";
import {neverlandReducer} from "./state/neverland.reducer";
import {ConfirmationPopupComponent} from "../../shared/components/confirmation-popup/confirmation-popup.component";


@NgModule({
  declarations: [
    NeverlandComponent,
    LeftNavComponentComponent,
    DescriptionInfoComponent,
    PromptDetailDialogComponent,
    TermsOfUsePopupComponent,
    RequestFeatureComponent,
    ConfirmationPopupComponent,
  ],
  imports: [
    CommonModule,
    NeverlandRoutingModule,
    CollapseModule,
    FormsModule,
    CarouselModule,
    EffectsModule.forFeature([NeverlandEffects]),
    StoreModule.forFeature(NEVER_LAND_STATE_NAME, neverlandReducer),
    TranslateModule
  ],
  providers: [],
  exports: []
})
export class NeverlandModule {
}
