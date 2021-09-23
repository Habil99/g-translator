import { configureStore } from '@reduxjs/toolkit';
import translatorReducer from '../features/translator/translatorSlice';
import { wordsApi } from "../services/wordsApi";

export const store = configureStore({
  reducer: {
    translator: translatorReducer,
    [wordsApi.reducerPath]: wordsApi.reducer
  },
});
