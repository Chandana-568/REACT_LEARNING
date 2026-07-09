import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    console.log("increasing");
    setNum(num + 1);
  }
  function decreaseNum() {
    console.log('dec');
    setNum(num - 1);
  }
  function jumpNum(){
    console.log("jumped by 2");
    setNum(num+2)
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{num}</h2>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpNum}>Jump by 2 </button>

    </div>
  );
};

export default App;
