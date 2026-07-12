import React from 'react'

const App = () => {

  function submitHandler(e){
    console.log('form Submitted');
    e.preventDefault()
  }
  return (
    <div>
      <h1>Form Handling In React</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name' />
        <button  >Submit</button>
      </form>
    </div>
  )
}

export default App
