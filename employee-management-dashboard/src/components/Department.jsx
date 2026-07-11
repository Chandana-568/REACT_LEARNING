import React from 'react'
import Team from './Team'
const Department = ({companyName,employee,promoteEmployee}) => {
  return (
    <div>
      <h2>Department Component</h2>
      <Team companyName={companyName}
      employee={employee} 
       promoteEmployee={promoteEmployee} />
    </div>
  )
}

export default Department
