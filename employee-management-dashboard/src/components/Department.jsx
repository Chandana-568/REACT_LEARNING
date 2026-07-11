import React from 'react'
import Team from './Team'
const Department = ({companyName,employee}) => {
  return (
    <div>
      <h2>Department Component</h2>
      <Team companyName={companyName}
      employee={employee} />
    </div>
  )
}

export default Department
