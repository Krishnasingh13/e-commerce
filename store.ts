// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
