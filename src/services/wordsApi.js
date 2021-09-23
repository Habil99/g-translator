import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const wordsApiHeaders = {
  'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  'x-rapidapi-key': '905094be2amsh044b55bdb24998dp139a6cjsnddea5196e39a'
}

const baseUrl = 'https://wordsapiv1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: wordsApiHeaders})

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getSynonyms: builder.query({
      query: (word) => createRequest(`/words/${word}/examples`)
    }),
  }),
})

export const {useGetSynonymsQuery} = wordsApi;
