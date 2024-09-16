// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counterslice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
