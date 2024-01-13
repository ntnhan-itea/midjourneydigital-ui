// src/app/store/reducers/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { ProductState, initialState } from './neverland-state';
import * as NeverlandActions from './neverland.actions';



export const neverlandReducer = createReducer(
  initialState,
  on(
    NeverlandActions.loadProducts,
    (state): ProductState => ({ ...state, loading: true })
  ),
  on(
    NeverlandActions.loadProductsSuccess,
    (state, { products: _products }): ProductState => ({
      ...state,
      loading: false,
      products: _products,
    })
  ),
  on(
    NeverlandActions.loadProductsFailure,
    (state, { error: _error }): ProductState => ({
      ...state,
      loading: false,
      error: _error,
    })
  )
);
