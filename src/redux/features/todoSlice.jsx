
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  cart: []
};



const todoSlice = createSlice({
  name: 'todo', 
  initialState,
  reducers: {
    addtodo: (state,action) => {
        state.cart.push(action.payload);
    },
    deletetodo: (state,action) => {
      state.cart = state.cart.filter((_, index)=>index !== action.payload);
    },
  },

});

// Export actions and reducer 
export const {addtodo,deletetodo }= todoSlice.actions;
export default todoSlice.reducer;
