import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketInfoType } from '../../interfaces/interfaces';


const initialState: BasketInfoType = {
  price: 0,
  allPizzas: 0
}

const BasketInfoReducer = createSlice({
  name: 'BasketInfo',
  initialState,
  reducers: {
    changePrice: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },
    decreasePrice: (state, action: PayloadAction<number>) => {
      state.price -= action.payload;
    },
    changeAllPizzas: (state, action: PayloadAction<number>) => {
      state.allPizzas = action.payload
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      state.allPizzas -= action.payload
    },
    deleteInfo: () => {
      return initialState;
    }
  }
});

export const { changePrice, changeAllPizzas, deleteInfo, decreasePrice, decreaseCount } = BasketInfoReducer.actions;

export default BasketInfoReducer.reducer;