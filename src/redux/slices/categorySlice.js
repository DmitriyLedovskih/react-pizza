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
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    onClickCategory(state, actions) {
      state.categoryId = actions.payload;
    },
    onClickSort(state, actions) {
      state.sortingItem = actions.payload;
    },
  },
});

export const { onClickCategory, onClickSort } = categorySlice.actions;

export default categorySlice.reducer;
