import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <h1> {props.user} , {props.age} </h1>
      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <button>MY PROFILE</button>
      </div>
    </div>
  )
}

export default Card
