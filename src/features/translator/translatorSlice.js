import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {wordsApiService} from "../api/wordsApi";
import axios from 'axios'

const wordsApiHeaders = {
  'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  'x-rapidapi-key': '905094be2amsh044b55bdb24998dp139a6cjsnddea5196e39a'
}

const baseUrl = 'https://wordsapiv1.p.rapidapi.com';

const config = {
  url: baseUrl,
  headers: wordsApiHeaders
}

const initialState = {
  data: [],
  status: 'idle'
}

export const getWordsApi = createAsyncThunk('translator/getWordsApi', async (payload) => {
  const response = await wordsApiService(payload)

  return response.data
})

const translator = createSlice({
  name: "translator",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWordsApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled'
    });
    builder.addCase(getWordsApi.pending, (state, action) => {
      state.status = 'loading'
    });
    builder.addCase(getWordsApi.rejected, (state, action) => {
      console.log(action.payload);
      state.status = 'rejected'
    })
  }
});

export default translator.reducer;
