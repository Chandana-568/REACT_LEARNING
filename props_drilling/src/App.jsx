import React from 'react'
import Card from './components/Card';
const App = () => {
  return (
    <div  className='parent'>
      <Card  user= 'Rupa' age={21} img=""/>
      <Card  user= 'somu' age={68}/>
      <Card  user= 'chandra' age={73}/>
      <Card  user= 'SheelaManju' age={40}/>
     
    </div>
  );
}

export default App
