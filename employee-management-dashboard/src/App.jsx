import React, { useState } from 'react'
import Company from './components/Company'
const App = () => {
  const companyName="TechNova Solutions";

  const [employee,setEmployee] = useState({
    id: 568,
    name:'chandana',
    age:21,
    role:'React Developer',
    salary: 50000,
    experience:'Fresher',
    isOnline:true,
    skills: ['HTML', 'CSS','JAVASCRIPT','REACT'],

  });
  const promoteEmployee = ()=>{
    setEmployee((prevEmployee)=>({
      ...prevEmployee,
      role: "Senior React Developer",
      salary: prevEmployee.salary + 30000,
    }));
  }

  console.log(employee.companyName)

  return (
    <div>
      <h1>Employee Management Dashboard</h1>
      <Company companyName={companyName}
        employee={employee}  
         promoteEmployee={promoteEmployee} />
    </div>
  )
}

export default App
