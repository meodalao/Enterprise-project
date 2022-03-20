import { PostAsyncAction } from "./PosttAsyncAction";
import { PostSlice } from "./PostSlice";

const Posts = {
  reducer: PostSlice.reducer,
  actions: {
    ...PostSlice.actions,
    ...PostAsyncAction,
  },
};

export { Posts };
