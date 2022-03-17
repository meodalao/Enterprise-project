import { configureStore } from "@reduxjs/toolkit";
import { Posts } from "./Post/index.js";
// import { Categories} from "./Categories/index.js";

const store = configureStore({
  reducer: {
    products: Posts.reducer,
    // categories: Categories.reducer
  },
});

export default store;