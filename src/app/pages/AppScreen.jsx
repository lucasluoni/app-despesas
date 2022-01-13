import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {apiGetCostsData} from './../services/apiService'

import Select from './../components/Select'
import TableRow from '../components/TableRow';
import Table from '../components/Table';
import TotalCosts from '../components/TotalCosts';
import Loading from './../components/Loading'

import { useHistory, useParams } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import {
  firstYearAvailableMonths,
  secondYearAvailableMonths,
  helperYearsArray,
} from './../helpers/dateHelpers'

const loadingStyles = css({
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  justifyContent: 'center',
  height: '100vh',
  overflow: 'hidden'
})

export default function AppScreen() {

  const [loading, setLoading] = useState(true)

  const monthsJuneToDecember = firstYearAvailableMonths()
  const monthsJanuaryToJune = secondYearAvailableMonths()
  const yearsArray = helperYearsArray()

  const [costsData, setCostsData] = useState([])
  const [defaultYearValue, setDefaultYearValue] = useState('2020')
  const [defaultMonthValue, setDefaultMonthValue] = useState('06')
  const [selectMonths, setSelectMonths] = useState([])
  const [selectYears, setSelectYears] = useState([])

  const params = useParams()
  const history = useHistory()
  const [ano, mes] = params.mes.split('-')

  // busca os dados do json e passa pro estado (costsData)
  const fetchCosts = async function (year, month){
    const initialCosts = await apiGetCostsData(year, month)
    setCostsData(initialCosts)
  } 

  useEffect(() => {
    fetchCosts(defaultYearValue, defaultMonthValue)
    // preenche os selects com os arrays de ano e mês
    setSelectYears(yearsArray)
    setSelectMonths(monthsJuneToDecember)
    history.push(`/despesas/${defaultYearValue}-${defaultMonthValue}`)
    setLoading(false)
  }, []) // 'deps' array vazio indica que ese useEffect só será executado no carregamento inicial

  const getSelectedData = async (year, month) => {
    const seletedCosts = await apiGetCostsData(year, month)
    setCostsData(seletedCosts)
  }    

  const handleYearChange = (evt) => {
    const selectedYearValue = yearsArray.filter((year) => year.id === evt)

    const setchanges = (monthsArray, yearSetted, monthSetted) => {
      getSelectedData(yearSetted, monthSetted)
      setSelectMonths(monthsArray)
      setDefaultYearValue(yearSetted)
      setDefaultMonthValue(yearSetted)
      history.push(`/despesas/${yearSetted}-${monthSetted}`)
    }    
    selectedYearValue[0].id === '2021' ? setchanges(monthsJanuaryToJune, '2021', '01'): setchanges(monthsJuneToDecember, '2020', '06')
  }
  
  const handleMonthChange = (evt) => {
    setDefaultMonthValue(evt)    
    getSelectedData(defaultYearValue, evt)
    history.push(`/despesas/${defaultYearValue}-${evt}`)  
  }
  
  useEffect(() => {
    setDefaultYearValue(ano)
    ano === '2021' ? setSelectMonths(monthsJanuaryToJune): setSelectMonths(monthsJuneToDecember)
    setDefaultMonthValue(mes)
    fetchCosts(ano, mes)
  },[params.mes])

  const costs = costsData.map(({id, descricao, categoria, valor, dia}) => ({id, despesa: descricao, categoria, dia, valor}))
  
  const labels = [
    {'id': '01', 'description': 'Despesa'}, 
    {'id': '02', 'description': 'Categoria'}, 
    {'id': '03', 'description': 'Dia'}, 
    {'id': '04', 'description': 'Valor (R$)'}
  ]

  let appJsx = (
    <span  css={loadingStyles}>
      <Loading />
    </span>
  )

  if (!loading) {
    appJsx = (
      <>
        <div className='container p-5'>
        
          <div className='p-2 mb-4'>          
            <TotalCosts costs={costs} />
              
              <form className="d-flex flex-row">          
              <Select 
                label='Ano'
                value={defaultYearValue} 
                onChange={handleYearChange}
              > 
                {selectYears} 
              </Select>
              <Select 
                label='Mês'
                value={defaultMonthValue} 
                onChange={handleMonthChange}
              >
                {selectMonths} 
              </Select>
              </form>
          </div>

          <Table labels={labels}>
            {costs.map((cost) => (
              <TableRow key={cost.id} cost={cost} />
            ))}
          </Table>

        </div>
      </>    
    )
  }
 
  return (
  <>
      {appJsx}
  </>
  )
}
