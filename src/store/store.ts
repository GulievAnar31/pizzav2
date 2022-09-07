import { configureStore, Store } from "@reduxjs/toolkit";
import BasketReducer from "./slices/BasketSlice";
import BasketInfoReducer from "./slices/BasketInfoSlice";
import PizzaReducer from "./slices/PizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
    basket: BasketReducer,
    basketInfo: BasketInfoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()