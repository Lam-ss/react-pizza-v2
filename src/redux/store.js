import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slises/filterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
