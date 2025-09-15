import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    // Add more reducers here
  },
});

export default store;
