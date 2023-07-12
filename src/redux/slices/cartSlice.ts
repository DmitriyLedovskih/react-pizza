import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartItem = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
  reviews: number;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    incrementCount(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    dicrementCount(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    removeAllItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce((acc, item) => item.price - acc, 0);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);

export const {
  addToCart,
  removeAllItems,
  removeItem,
  incrementCount,
  dicrementCount,
} = cartSlice.actions;

export default cartSlice.reducer;
