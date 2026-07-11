import React from 'react'

const EmployeeCard = ({companyName,employee}) => {
  return (
    <div>
      <h2>Employee Card</h2>
      <h3>{companyName}</h3>

       <p>Name: {employee.name}</p>
       <p>Age: {employee.age}</p>
       <p>Salary: {employee.salary}</p>
       <p>ID: {employee.id}</p>
       <p>Role: {employee.role}</p>
       <p>Experience: {employee.experience}</p>

       <p>
        Status: {employee.isOnline ? "YES" : "NO"}
       </p>

       <h4>Skils</h4>
       <ul>
        {employee.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
        ))}
       </ul>

      <h3></h3>
    </div>
  )
}

export default EmployeeCard
