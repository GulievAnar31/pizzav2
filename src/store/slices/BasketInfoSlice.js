import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  allPizzas: 0
}

const BasketInfoReducer = createSlice({
  name: 'BasketInfo',
  initialState,
  reducers: {
    changePrice: (state, action) => {
      state.price += action.payload;
    },
    changeAllPizzas: (state, action) => {
      state.allPizzas = action.payload
    }
  }
});

export const { changePrice, changeAllPizzas } = BasketInfoReducer.actions;

export default BasketInfoReducer.reducer;