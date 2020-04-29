import { createSlice } from '@reduxjs/toolkit';
import store from 'state/store';

const initialState = {
  themeMode: 'light'
};

// Slice
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      const { payload } = action;
      state.themeMode = payload;
    }
  }
});

// Reducers
export default uiSlice.reducer;

// Selectors
export const uiSelector = (state) => state.ui;

// Actions
const { setThemeMode } = uiSlice.actions;

// Thunks
export const toggleThemeMode = () => (dispatch) => {
  const { themeMode } = store.getState().ui;
  const mode = themeMode === 'light' ? 'dark' : 'light';

  dispatch(setThemeMode(mode));
};
