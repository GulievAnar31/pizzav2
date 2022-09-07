import { PizzaItemType, AsyncThunkConfig, ParamsType } from "../interfaces/interfaces";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPizzas = createAsyncThunk<PizzaItemType[], ParamsType>(
  'pizza/fetchPizzasStatus', //type
  async (params: ParamsType, thunkApi: AsyncThunkConfig) => {
    const { categorie, sort, search, isFirstReq } = params;

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
        const storageData = JSON.parse(localStorage.getItem('pizzaData'));
        localStorage.setItem('pizzaData', JSON.stringify(data));

        if (isFirstReq.current && storageData.length > 0) {
          isFirstReq.current = false;
          return storageData;
        } else {
          return data;
        }
      }
    } catch (err) {
      alert(err.mesage);
    }
  }
);