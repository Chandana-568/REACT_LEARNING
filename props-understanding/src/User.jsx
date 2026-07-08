import React from 'react'
import Profile from './Profile';
import Skills from './Skills';

const User = ({user, skills}) => {
  return (
    <div className='card'>
      <Profile user={user} />
      <Skills skills={skills} />
    </div>
  );
}

export default User;
