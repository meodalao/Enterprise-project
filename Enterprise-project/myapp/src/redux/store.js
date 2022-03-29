import { configureStore } from "@reduxjs/toolkit";
import { Posts } from "./Post/index.js";
// import { Login } from "./Product/index.js";
// import { Categories} from "./Categories/index.js";

const store = configureStore({
  reducer: {
    products: Posts.reducer,
    // categories: Categories.reducer
    // login: Login.reducer,
  },
});

export default store;
