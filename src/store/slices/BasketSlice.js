import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

export const BasketReducer = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            return [...state, action.payload];
        }
    }
});

export const { addPizza } = BasketReducer.actions;

export default BasketReducer.reducer;