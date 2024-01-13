import { Product } from "./product.model";

export const NEVER_LAND_STATE_NAME = 'neverlandState';

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
