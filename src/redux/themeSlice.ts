import { createSlice } from '@reduxjs/toolkit';

// Initial state for theme
const initialState = {
  isDarkMode: false, // Default theme is light mode
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action to toggle dark mode
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
