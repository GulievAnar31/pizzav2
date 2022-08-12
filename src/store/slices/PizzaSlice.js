import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
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
        },
        setFilters: (state, action) => {
          state.page = action.payload.page
          state.categorie = action.payload.category
          state.sort = action.payload.sortBy
          state.search = action.payload.search
        }
    }
})

export const { changeCategories, changeSort, changeSearch, setFilters } = PizzaReducer.actions

export default PizzaReducer.reducer;