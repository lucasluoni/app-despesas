// httpService executa as requisições

import axios from 'axios'

export async function get(url) {
  // isolamos as dependências com axios
  const { data } = await axios.get(url)
  return data
}