import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import searchReducer from "./slices/searchSlice";
import itemsReducer from "./slices/itemsSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    search: searchReducer,
    items: itemsReducer,
  },
});
