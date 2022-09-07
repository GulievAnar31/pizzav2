import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./slices/BasketSlice";
import BasketInfoReducer from "./slices/BasketInfoSlice";
import PizzaReducer from "./slices/PizzaSlice";

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
    basket: BasketReducer,
    basketInfo: BasketInfoReducer
  }
});