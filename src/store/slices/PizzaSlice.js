import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    page: 1,
    categorie: 0,
    sort: 'rating',
    search: '',
    pizzas: []
};

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { categorie, sort, search, setIsLoading } = params;
        
        const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?`;
        const url = `page=${1}` + 
          `${categorie && `&category=${categorie}`}` + 
          `${sort ? `&sortBy=${sort}&order=asc` : `&sortBy=rating&order=asc`}` +
          `${search ? `&search=${search}` : ''}`;

          try {
            const res = await axios.get(mockApi + url);
            await setIsLoading(false);
            console.log(res);
            return res.data;
          } catch(err) {
            alert(err.mesage);
          }
        }
)

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
    },
    extraReducers: (builder) => {
        // rejected - загрузилось, pending - грузится
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload
        })
    }
})

export const { changeCategories, changeSort, changeSearch, setFilters } = PizzaReducer.actions

export default PizzaReducer.reducer;