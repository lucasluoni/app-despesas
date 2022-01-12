const MONTHS = [
  {
    id: '01',
    description: 'Janeiro'}, 
  {
    id: '02',
    description: 'Fevereiro'}, 
  {
    id: '03',
    description: 'Março'}, 
  {
    id: '04',
    description: 'Abril'}, 
  {
    id: '05',
    description: 'Maio'}, 
  {
    id: '06',
    description: 'Junho'}, 
  {
    id: '07',
    description: 'Julho'}, 
  {
    id: '08',
    description: 'Agosto'}, 
  {
    id: '09',
    description: 'Setembro'}, 
  {
    id: '10',
    description: 'Outubro'}, 
  {
    id: '11',
    description: 'Novembro'}, 
  {
    id: '12',
    description: 'Dezembro'}
]

export function firstYearAvailableMonths() {
  const firstYearAvailableMonths = MONTHS.filter((month) => month.id > '05')
  return firstYearAvailableMonths
}

export function secondYearAvailableMonths() {
  const secondYearAvailableMonths = MONTHS.filter((month) => month.id < '07')
  return secondYearAvailableMonths
}

const YEARS = [
  {
    id: '2020',
    description: '2020'
  },
  {
    id: '2021',
    description: '2021'
  },
]

export function helperYearsArray() {
  return YEARS
}

