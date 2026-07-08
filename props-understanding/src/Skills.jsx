import React from 'react'


function Skills({ skills }) {
  return (
    <div>
      <h3>SKILLS:</h3>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
}

export default Skills;