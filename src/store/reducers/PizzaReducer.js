import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categorie: 0,
};

export const PizzaReducer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        changeCategories: (state, action) => {
            state.categorie = action.payload
        }
    }
})

export const { changeCategories } = PizzaReducer.actions

export default PizzaReducer.reducer;