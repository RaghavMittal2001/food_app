
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  cart: []
};



const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.cart.push(action.payload);
    },
    deletetodo: (state, action) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
    updatetodo: (state, action) => {
      const foundindex = state.cart.findIndex(items => items.id === action.payload.id);
      // found.price= action.payload.finalPrice;
      // found.qty= action.payload.qty; 
      // cart: [...state.cart],
      if (foundindex !== -1) {
        // Create a new item with updated properties
        state.cart[foundindex] = {
          ...state.cart[foundindex],
          price: action.payload.price,
          qty: action.payload.qty,
        };
      }
    },
    droptodo: (state)=>{
      state.cart=[];
    },
  },

});

// Export actions and reducer 
export const { addtodo, deletetodo, updatetodo,droptodo } = todoSlice.actions;
export default todoSlice.reducer;
