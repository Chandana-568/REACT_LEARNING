import React from "react";
import EmployeeCard from "./EmployeeCard";
const Team = ({companyName,employee}) => {
  return (
    <div>
      <h2> Team component</h2>
      <EmployeeCard companyName={companyName}
      employee={employee} />
    </div>
  );
};

export default Team;
