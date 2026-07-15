import React from 'react'

const App = () => {

  const user ={
    username:'chandana',
    age:21,
    city:'ckm'
  }
  localStorage.setItem('user', JSON.stringify(user))

  const user1=JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (

   <div>
      <h1>Learning Local Storage</h1>
    </div>
  )
}

export default App
