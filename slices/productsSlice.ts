import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  tags: string[];
}

interface ProductsState {
  items: Product[]; // Array to hold product data
  page: number; // Current page
  total: number; // Total number of products
}

const initialState: ProductsState = {
  items: [],
  page: 1,
  total: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<{ products: Product[]; total: number }>,
    ) => {
      const { products, total } = action.payload;
      state.items = [...state.items, ...products];
      state.total = total;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setProducts, setPage } = productsSlice.actions;
export default productsSlice.reducer;