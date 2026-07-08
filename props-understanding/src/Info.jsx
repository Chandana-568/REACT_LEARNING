import React from 'react'
import Address from './Address'

const Info = ({user}) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p> AGE::{user.age} </p>
      <p> profession::{user.profession} </p>
      <Address user={user}/>
    </div>
  )
}

export default Info
