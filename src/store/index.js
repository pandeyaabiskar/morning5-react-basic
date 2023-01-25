import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";
import productReducer from "./slices/productSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    product: productReducer
  },
});
