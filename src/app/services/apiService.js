// apiService para regras de negócio do back end
import { get } from './httpService'

const BACK_END_URL =
  process.env.NODE_ENV === 'development' ?
    'http://localhost:3001' :
    'https://json-server-despesas.herokuapp.com' 

export async function apiGetCostsData(year, month) {
  const costsData = await get(`${BACK_END_URL}/despesas?mes=${year}-${month}`)
  return costsData.sort((a, b) => a.dia - b.dia)
}