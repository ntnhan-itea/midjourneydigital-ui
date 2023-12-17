// src/app/store/reducers/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as NerverlandActions from './neverland.actions';
import { Product } from './product.model';

export const NEVER_LAND_REDUCER_NAME = 'neverlandReducer';

export interface ProductState {
  products: Product[];
  error: any;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  error: null,
  loading: false,
};

export const productReducer = createReducer(
  initialState,
  on(NerverlandActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(
    NerverlandActions.loadProductsSuccess,
    (state, { products: _products }) => ({
      ...state,
      loading: false,
      products: _products,
    })
  ),
  on(NerverlandActions.loadProductsFailure, (state, { error: _error }) => ({
    ...state,
    loading: false,
    error: _error,
  }))
);
