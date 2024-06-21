export const mapperQuestionsAnwsers = (arrays) => {
  if(!arrays) return

  const [keys, ...response] = arrays[1].map((_, i) => {
    return arrays.map((ee) => ee[i]);
  })

  return response.map((resp, ii) => ({...Object.fromEntries(keys.map((key, i) => [key, resp[i]])), id: ii}))
}