import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {wordsApiService} from "../api/wordsApi";

const initialState = {
  data: [],
  status: 'idle',
  notFoundedWords: [],
  error: ''
}

export const getWordsApi = createAsyncThunk('translator/getWordsApi', async (payload) => {
  const {type, words} = payload;

  const res = await wordsApiService({type, words});

  return res.data
})

const translator = createSlice({
  name: "translator",
  initialState,
  reducers: {
    /*setNotFoundedWords: (state, {payload}) => {
      state.notFoundedWords = state.notFoundedWords.concat(payload)
    }*/
  },
  extraReducers: builder => {
    builder.addCase(getWordsApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled'
    });
    builder.addCase(getWordsApi.pending, (state, action) => {
      state.status = 'loading'
    });
    builder.addCase(getWordsApi.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'rejected'
    })
  }
});

/*export const {
  setNotFoundedWords
} = translator.actions*/

export default translator.reducer;
