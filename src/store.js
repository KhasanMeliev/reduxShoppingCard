import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const store = configureStore({
  reducer: {
    shop: productReducer,
  },
});

export default store;
