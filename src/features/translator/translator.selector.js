export const translatorSelector = {
  status: state => state.translator.status,
  data: state => state.translator.data,
  notFoundedWords: state => state.translator.notFoundedWords,
  error: state => state.translator.error,
}
