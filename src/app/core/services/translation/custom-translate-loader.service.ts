import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LanguageOption } from './translation-custom.service';

@Injectable({ providedIn: 'root' })
export class CustomTranslateLoader implements TranslateLoader {
  readonly TRANSLATION_FILE_PATH: string = '/assets/i18n/translations.json';

  constructor(private http: HttpClient) {}

  public getTranslation(lang: LanguageOption): Observable<
    | {
        [key: string]: string;
      }
    | {}
  > {
    return this.http.get(this.TRANSLATION_FILE_PATH).pipe(
      map((translations: any) => {
        console.log({ translations });

        const langTranslations: { [key: string]: string } = {};

        Object.keys(translations).forEach((key) => {
          if (translations?.[key]?.[lang]) {
            langTranslations[key] = translations[key][lang];
          }
        });

        return langTranslations;
      }),
      catchError(() => of({}))
    );
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new CustomTranslateLoader(http);
}
