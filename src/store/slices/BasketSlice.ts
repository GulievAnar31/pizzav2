import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

export const BasketReducer = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            return [...state, action.payload];
        },
        removeAllPizzas: () => {
            return initialState;
        },
        deletePizza: (state, action) => {
          return state = action.payload
        }
    }
});

export const { addPizza, removeAllPizzas, deletePizza } = BasketReducer.actions;

export default BasketReducer.reducer;