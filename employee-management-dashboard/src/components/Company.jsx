import React from 'react'
import Department from './Department'

const Company = ({companyName,employee, promoteEmployee}) => {
  return (
    <div>
      <h2>Company Component</h2>
      <h3>{companyName}</h3>
      <Department  companyName={companyName}
       employee={employee} 
       promoteEmployee={promoteEmployee} />
    </div>
  )
}

export default Company
