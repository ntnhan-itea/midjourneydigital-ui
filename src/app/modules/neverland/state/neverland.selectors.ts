import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NEVER_LAND_REDUCER_NAME, ProductState } from './neverland.reducer';

export const selectProductState = createFeatureSelector<ProductState>(
  NEVER_LAND_REDUCER_NAME
);

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectProductLoading = createSelector(
    selectProductState,
    (state: ProductState) => state.loading
);