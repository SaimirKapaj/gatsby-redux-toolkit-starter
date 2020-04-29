import { configureStore, combineReducers } from '@reduxjs/toolkit';

import uiReducer from 'state/ui';

const rootReducer = combineReducers({
  ui: uiReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
