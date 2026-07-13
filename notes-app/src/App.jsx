import React from 'react'

const App = () => {

const submitHandler=(e)=>{
  e.preventDefault();
  console.log('form submitted');
  
}
  return (
    <div className='h-screen bg-black text-white '>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuxDwWftg1ZE4ZW7_jqKrRYBATld8rP8yefw1jP0yDg&s" alt="" />
      <form onChange={(e)=>{
        submitHandler(e)
      }} className='flex items-start flex-col gap-6 p-10 '>
        <input type="text" 
         placeholder='Enter Task' 
         className='px-5 w-80 py-2 outline-none border-2 rounded' />  

         <input type="text"
         className='px-5 w-80  h-20 outline-none py-2 border-2 rounded'
         placeholder='write details'
         />
         <button className='bg-white w-80 outline-none text-black px-5 py-2'>Add Notes</button>
        
      </form>
    </div>
  )
}

export default App
