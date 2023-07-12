import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchSliceState {
  searchValue: string;
}

const initialState: SearchSliceState = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onChangeSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearch = (state: RootState) => state.search;

export const { onChangeSearch } = searchSlice.actions;

export default searchSlice.reducer;
