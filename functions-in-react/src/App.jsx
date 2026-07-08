import React from 'react'

const App = () => {


const pageScrolling = ()=>{
  console.log('page is scrolling');
  
}
  return (
  <div onWheel={()=>{
pageScrolling(elem)    
  }}>
<div className="page1"></div>
<div className="page2"></div>
<div className="page3"></div>

</div>
  );
}

export default App;
