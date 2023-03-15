import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getItems(state, actions) {
      state.items = actions.payload;
    },
  },
});

export const { getItems } = searchSlice.actions;

export default searchSlice.reducer;
