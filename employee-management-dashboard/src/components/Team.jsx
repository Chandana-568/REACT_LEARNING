import React from "react";
import EmployeeCard from "./EmployeeCard";
const Team = ({companyName,employee,promoteEmployee}) => {
  return (
    <div>
      <h2> Team component</h2>
      <EmployeeCard companyName={companyName}
      employee={employee} 
      promoteEmployee={promoteEmployee} />
    </div>
  );
};

export default Team;
