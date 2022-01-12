import React from 'react'

export default function Table({
  children,
  labels = [
    { id: 'op1', description: 'Label 1' },
    { id: 'op2', description: 'Label 2' },
    { id: 'op3', description: 'Label 3' },
    { id: 'op4', description: 'Label 4' },
  ],
}){
  return (
    <table className="table">
    
    <thead>
      <tr>
        {labels.map((label) => {
          return (
            <th scope="col" key={label.id}>{label.description}</th>
          )
        })}
      </tr>
    </thead>

    <tbody>
      {children}
    </tbody>

  </table>      
)}
