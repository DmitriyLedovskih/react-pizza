import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SortingItemType = {
  name: string;
  sortProperty: string;
  order: string;
};

interface FilterSliceState {
  categoryId: number;
  categoryNames: string[];
  categoryName: string;
  sortingItem: SortingItemType;
  currentPage: number;
}

const initialState: FilterSliceState = {
  categoryId: 0,

  categoryNames: [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ],

  categoryName: "Все",

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
    onClickCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.categoryName = state.categoryNames[state.categoryId];
    },
    onClickSort(state, action: PayloadAction<SortingItemType>) {
      state.sortingItem = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { onClickCategory, onClickSort, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
