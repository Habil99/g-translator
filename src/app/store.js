import { configureStore } from '@reduxjs/toolkit';
import translatorReducer from '../features/translator/translatorSlice';

export const store = configureStore({
  reducer: {
    translator: translatorReducer,
  },
});
