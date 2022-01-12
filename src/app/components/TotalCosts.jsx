import React from 'react'

export default function TotalCosts({costs}) {

  const totalCosts = costs.reduce((total, cost) => {
    return total += cost.valor
  }, 0)
  return (
    <h3 className="float-right">Despesa Total: <strong>{`R$ ${totalCosts.toLocaleString('PT')}`}</strong></h3>
  )
}