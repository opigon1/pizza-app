import { createSlice } from '@reduxjs/toolkit';
import { ICartItem } from '../interfaces/CartItem.interface';

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });
      } else {
        existed.count += 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;
