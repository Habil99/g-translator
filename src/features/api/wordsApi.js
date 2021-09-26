import axios from 'axios'

const wordsApiHeaders = {
  'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  'x-rapidapi-key': '905094be2amsh044b55bdb24998dp139a6cjsnddea5196e39a'
}

const baseUrl = 'https://wordsapiv1.p.rapidapi.com/words';

const promise = async (word, type) => {
  try {
    const res = await axios.request({
      url: baseUrl + `/${word}/${type}`,
      headers: wordsApiHeaders
    })

    if (res.status === 200 && res.data) return res
  } catch (err) {
    return err;
  }
}

const mutateResponseData = (responses) => {
  const data = [];
  for (let i = 0; i < responses.length; i++) {
    const response = responses[i]

    data.push(response.data);
    /*
    * responses: [
    *   0: [
    *     data: {} -> responses[0].data || response.data && response.status
    *   ],
    *   1: [
    *     data: {} -> responses[1].data || response.data && response.status
    *   ]
    * ]
    *
    * Result must be like that
    *
    * [
    *   {
    *     word: '',
    *     synonyms: []
    *   },
    *  {
    *     word: '',
    *     synonyms: []
    *   }
    * ]
    * */
  }

  return data;
}

export const wordsApiService = async ({type, words}) => {
  const data = [];
  const uniqueWords = [...new Set(words)]

  for (let i = 0; i < uniqueWords.length; i++) {
    const word = uniqueWords[i]

    const response = await promise(word, type);

    data.push(response);
  }

  // console.log({data: mutateResponseData(data)})

  return {
    data: mutateResponseData(data)
  }
}
