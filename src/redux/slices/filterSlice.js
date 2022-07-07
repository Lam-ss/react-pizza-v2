import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoriId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoriId } = filterSlice.actions;

export default filterSlice.reducer;
