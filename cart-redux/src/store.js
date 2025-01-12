import { configureStore } from "@reduxjs/toolkit";
import cartReucer from './features/cart/cartSlics';

export const store = configureStore({
    reducer:{
        cart: cartReucer,
    }
})