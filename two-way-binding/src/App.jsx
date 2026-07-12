import React, { useState } from 'react'

const App = () => {

  const [title,setTitle] =useState('')

  function submitHandler(e){
    console.log('form Submitted by' ,title);
    e.preventDefault()
    setTitle('')
  }
  return (
    <div>
      <h1>Form Handling In React</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name'   value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}
 />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

