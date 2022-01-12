import React from 'react'

export default function TableRow({cost}) {

  return (
    <tr key={cost.id}>
      <td>{cost.despesa}</td>
      <td>{cost.categoria}</td>
      <td>{cost.dia}</td>
      <td>{`${cost.valor.toLocaleString('PT')}`}</td>
    </tr>
  )
}