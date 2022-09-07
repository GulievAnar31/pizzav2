import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PizzaStateType } from '../../interfaces/interfaces';
import { fetchPizzas } from '../../lib/asyncService';

const initialState: PizzaStateType = {
  page: 1,
  categorie: 0,
  sort: 'rating',
  search: '',
  pizzas: [],
  status: 'loading'
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
      state.page = Number(action.payload.page)
      state.categorie = Number(action.payload.category)
      state.sort = action.payload.sortBy
      state.search = action.payload.search
    }
  },
  extraReducers: (builder) => {
    // rejected - загрузилось, pending - грузится
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload
    })
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        console.log('Данные грузятся');
      })
      .addMatcher(fetchPizzas.rejected as any, (state) => {
        state.status = 'loaded';

        if (state.pizzas && state.pizzas.length > 0) console.log('Данные загружены');
      })
  }
})

export const selectorPizzas = (state: RootState) => state.pizza;

export const { changeCategories, changeSort, changeSearch, setFilters } = PizzaReducer.actions

export default PizzaReducer.reducer;