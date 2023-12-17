import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MidjourneydigitalService } from 'src/app/core/services/api/midjourneydigital.service';
import * as NeverlandActions from './neverland.actions';

@Injectable()
export class NeverlandEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NeverlandActions.loadProducts),
      switchMap(() =>
        this.midjourneydigitalService.getProducts().pipe(
          map((products) => NeverlandActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(NeverlandActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private midjourneydigitalService: MidjourneydigitalService
  ) {}
}
