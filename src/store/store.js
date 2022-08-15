import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./slices/BasketSlice";
import PizzaReducer from "./slices/PizzaSlice";

console.log(BasketReducer);

export const store = configureStore({
    reducer: {
        pizza: PizzaReducer,
        basket: BasketReducer
    }
});