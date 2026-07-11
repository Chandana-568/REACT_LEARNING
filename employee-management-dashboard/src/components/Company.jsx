import React from 'react'
import Department from './Department'

const company = ({companyName,employee}) => {
  return (
    <div>
      <h2>Company Component</h2>
      <h3>{companyName}</h3>
      <Department  companyName={companyName}
       employee={employee} />
    </div>
  )
}

export default company
