import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slises/filterSlice";
import filter from "./slises/filterSlice";

export const store = configureStore({
  reducer: { filter },
});
