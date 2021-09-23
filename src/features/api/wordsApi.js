import axios from 'axios'

const wordsApiHeaders = {
  'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  'x-rapidapi-key': '905094be2amsh044b55bdb24998dp139a6cjsnddea5196e39a'
}

const baseUrl = 'https://wordsapiv1.p.rapidapi.com';

export const wordsApiService = ({type, word}) => {
  return axios.request({
    url: baseUrl + `/words/${word}/${type}`,
    headers: wordsApiHeaders
  });
}
