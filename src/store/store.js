import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./reducers/PizzaReducer";

export const store = configureStore({
    reducer: {
        pizza: PizzaReducer,
    },
});