import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "items/itemsFetchStatus",
  async (params) => {
    const { categoryId, sortingItem, searchValue, currentPage } = params;
    const res = await fetch(
      `https://640f1a654ed25579dc45daf1.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${
        searchValue ? `&search=${searchValue}` : ""
      }&page=${currentPage || 1}&limit=8`
    );
    const data = await res.json();
    return data;
  }
);

const initialState = {
  items: [],
  item: {},
  status: "loading",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.items = actions.payload;
    },
    setItem(state, actions) {
      state.item = actions.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, actions) => {
      state.status = "success";
      state.items = actions.payload;
    },
    [fetchItems.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectItemsData = (state) => state.items;

export const { setItems, setItem } = itemsSlice.actions;

export default itemsSlice.reducer;
