import { createSlice } from "@reduxjs/toolkit";
import { ProductAsyncAction } from "./ProductAsyncAction";

const INITIAL_STATE = {
  data: [],
};
// @ts-ignore
export const ProductSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(
      ProductAsyncAction.getProducts.pending,
      (state, { payload }) => {
        // state.data = payload;
      }
    );
    builder.addCase(
      ProductAsyncAction.getProducts.rejected,
      (state, { payload }) => {
        // @ts-ignore
        // state.data = payload;
      }
    );
    builder.addCase(
      ProductAsyncAction.getProducts.fulfilled,
      (state, { payload }) => {
        state.data = payload;
      }
    );

    builder.addCase(
      ProductAsyncAction.searchPosts.pending,
      // @ts-ignore
      (state, { payload }) => {
        // @ts-ignore
        state.loading = false;
      }
    );
    builder.addCase(
      ProductAsyncAction.searchPosts.rejected,
      // @ts-ignore
      (state, { payload }) => {
        // @ts-ignore
        state.loading = false;
      }
    );
    builder.addCase(
      ProductAsyncAction.searchPosts.fulfilled,
      (state, { payload }) => {
        state.data = payload;
        // @ts-ignore
        state.loading = false;
      }
    );
  },
});
