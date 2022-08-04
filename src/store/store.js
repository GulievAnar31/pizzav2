import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./slices/PizzaSlice";

export const store = configureStore({
    reducer: {
        pizza: PizzaReducer,
    },
});