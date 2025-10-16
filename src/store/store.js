import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import skillsReducer from './slices/skillsSlice';
import projectsReducer from './slices/projectsSlice';
import additionalInfoReducer from './slices/additionalInfoSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    additionalInfo: additionalInfoReducer,
  },
});

export default store;
