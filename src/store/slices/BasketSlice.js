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
        }
    }
});

export const { addPizza, removeAllPizzas } = BasketReducer.actions;

export default BasketReducer.reducer;