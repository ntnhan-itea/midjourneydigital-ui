import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationCustomService {
  constructor(private translate: TranslateService) {}

  public changeLanguage(lang: LanguageOption) {
    this.translate.use(lang);
  }
}

export enum LanguageOption {
  DE = 'de',
  EN = 'en',
  VI = 'vi',
}
