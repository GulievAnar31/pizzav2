import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categorie: 0,
};

export const categoriesReducer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        changeCategories: (state, action) => {
            state.categorie = action.payload
        }
    }
})

export const { changeCategories } = categoriesReducer.actions

export default categoriesReducer.reducer;