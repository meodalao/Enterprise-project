import { PostAsyncAction } from "./PosttAsyncAction";
import { PostSlice } from "./PostSlice";

const Products = {
  reducer: PostSlice.reducer,
  actions: {
    ...PostSlice.actions,
    ...PostAsyncAction,
  },
};

export {Products} ;