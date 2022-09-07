import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { ParamsType, AsyncThunkConfig, PizzaStateType, PizzaItemType } from '../../interfaces/interfaces';

const initialState: PizzaStateType = {
  page: 1,
  categorie: 0,
  sort: 'rating',
  search: '',
  pizzas: [],
  status: 'loading'
};

export const fetchPizzas = createAsyncThunk<PizzaItemType[], ParamsType>(
  'pizza/fetchPizzasStatus', //type
  async (params: ParamsType, thunkApi: AsyncThunkConfig) => {
    const { categorie, sort, search } = params;

    const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?`;
    const url = `page=${1}` +
      `${categorie ? `&category=${categorie}` : `&category=0`}` +
      `${sort ? `&sortBy=${sort}&order=asc` : `&sortBy=rating&order=asc`}` +
      `${search ? `&search=${search}` : ''}`;

    try {
      const { data } = await axios.get<PizzaItemType[]>(categorie !== 0 ? mockApi + url : mockApi);

      if (data && data.length === 0) {
        thunkApi.rejectWithValue('Пиццы пустые')
      } else {
        return data;
      }
    } catch (err) {
      alert(err.mesage);
    }
  }
);

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