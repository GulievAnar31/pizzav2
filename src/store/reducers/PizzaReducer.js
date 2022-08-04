import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categorie: 0,
    sort: 'rating',
    search: ''
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
        changeSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { changeCategories, changeSort, changeSearch } = PizzaReducer.actions

export default PizzaReducer.reducer;