import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice'; // Import the theme slice

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;
