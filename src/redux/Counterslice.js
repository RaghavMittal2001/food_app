
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  value: 0
};
const initial_cart = {
  cartlog:[]
};


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
},{
  name: 'Cart',
 initial_cart,
 reducer:{

 }

});

// Export actions and reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
