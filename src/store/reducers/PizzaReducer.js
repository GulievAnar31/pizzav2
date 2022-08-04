import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categorie: 0,
    sort: 'rating',
};

export const PizzaReducer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        changeCategories: (state, action) => {
            state.categorie = action.payload
        },
        changeSort: (state, action) => {
            state.sort = action.payload
        },
    }
})

export const { changeCategories, changeSort } = PizzaReducer.actions

export default PizzaReducer.reducer;