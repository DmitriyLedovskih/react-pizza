import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,

  categoryNames: [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ],

  sortingItem: {
    name: "популярности",
    sortProperty: "rating",
    order: "desc",
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onClickCategory(state, actions) {
      state.categoryId = actions.payload;
    },
    onClickSort(state, actions) {
      state.sortingItem = actions.payload;
    },
    setCurrentPage(state, actions) {
      state.currentPage = actions.payload;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { onClickCategory, onClickSort, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
