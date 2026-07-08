import React from 'react'
import Info from "./Info";

const Profile = ({user}) => {
  return (
    <div>
      <h2>Profile Section</h2>
      <Info user={user}  />
    </div>
  )
}

export default Profile
