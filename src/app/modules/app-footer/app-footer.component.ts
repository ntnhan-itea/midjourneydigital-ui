import {Component, inject} from '@angular/core';
import {LanguageOption, TranslationCustomService} from "../../core/services/translation/translation-custom.service";

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
})
export class AppFooterComponent {
  #translationService = inject(TranslationCustomService);
  languageOption = LanguageOption;

  switchLanguage(language: LanguageOption): void {
    this.#translationService.changeLanguage(language);
  }
}
