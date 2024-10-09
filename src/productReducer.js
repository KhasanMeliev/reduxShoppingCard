import { createSlice } from "@reduxjs/toolkit";
import { items } from "./data";

const productReducer = createSlice({
  name: "shop",
  initialState: {
    data: items,
    basketItems: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      state.totalPrice += item.price;
      state.totalItems += 1;
      if (state.basketItems.some((basketItem) => basketItem.id === item.id)) {
        const existingItemIndex = state.basketItems.findIndex(
          (basketItem) => basketItem.id === item.id
        );
        state.basketItems[existingItemIndex].price += item.price;
      } else {
        state.basketItems.push(item);
      }
    },
  },
});

export const { addToCart } = productReducer.actions;
export default productReducer.reducer;
