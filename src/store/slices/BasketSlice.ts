import { createSlice } from "@reduxjs/toolkit";
import { AddPizzaActionType, IActionAddPizza, IActionDeletePizza } from "../../interfaces/interfaces";

const initialState: AddPizzaActionType[] = [];

export const BasketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza: (state, action: IActionAddPizza) => {
      return [...state, action.payload];
    },
    removeAllPizzas: () => {
      return initialState;
    },
    deletePizza: (state, action: IActionDeletePizza) => {
      return state = action.payload
    }
  }
});

export const { addPizza, removeAllPizzas, deletePizza } = BasketReducer.actions;

export default BasketReducer.reducer;