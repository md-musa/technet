import { IProduct } from './../../../types/globalTypes';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
    products: IProduct[];
}
const initialState: ICart = {
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.products.find(product => product._id === action.payload._id);
            console.log("EXistiong", existingItem?.name)
            if (existingItem) {
                existingItem.quantity == existingItem.quantity! + 1;

            } else {
                state.products.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(item => item._id == action.payload);
        }
    }
})


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;