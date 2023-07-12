import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ItemType = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
  count: number;
  reviews: number;
};

interface ItemsSliceState {
  items: ItemType[];
  item: ItemType;
  status: "loading" | "success" | "error";
  activeType: number;
  activeSize: number;
  typeNames: string[];
}

type sortingItem = Record<string, string>;

type FetchItemsType = {
  categoryId: number;
  sortingItem: sortingItem;
  searchValue: string;
  currentPage: number;
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export const fetchItems = createAsyncThunk(
  "items/itemsFetchStatus",
  async (params: FetchItemsType) => {
    const { categoryId, sortingItem, searchValue, currentPage } = params;
    const res = await fetch(
      `https://6442fcd190738aa7c069c92c.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${
        searchValue ? `&search=${searchValue}` : ""
      }&page=${currentPage || 1}&limit=8`
    );
    return (await res.json()) as ItemType[];
  }
);

const initialState: ItemsSliceState = {
  items: [],
  item: {
    id: "",
    images: [],
    title: "",
    types: [],
    sizes: [],
    price: 0,
    rating: 0,
    info: [],
    count: 0,
    reviews: 0,
  },
  status: Status.LOADING,
  activeType: 0,
  activeSize: 0,
  typeNames: ["тонкое", "традиционное"],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ItemType[]>) {
      state.items = action.payload;
    },
    setItem(state, action: PayloadAction<ItemType>) {
      state.item = action.payload;
      localStorage.setItem("item", JSON.stringify(action.payload));
    },
    setActiveType(state, action: PayloadAction<number>) {
      state.activeType = action.payload;
    },
    setActiveSize(state, action: PayloadAction<number>) {
      state.activeSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });

    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectItemsData = (state: RootState) => state.items;

export const { setItems, setItem, setActiveSize, setActiveType } =
  itemsSlice.actions;

export default itemsSlice.reducer;
