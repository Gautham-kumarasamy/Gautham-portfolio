import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import skillsReducer from './slices/skillsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    skills: skillsReducer,
    // Add more reducers here
  },
});

export default store;
