import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "chandana", age: 20 });
  const [val, setVal] = useState([10, 20, 30]);
  function btnChanged() {
    const newNum = { ...num };
    newNum.user = "rupa";
    console.log(newNum);
    const newArr = [...val];
    newArr.push(20200);
    console.log(newArr);
    setVal(newArr);

    setNum(newNum);
  }
  return (
    <div>
      <h1>{setVal}</h1>
      <h1>
        {num.user},{num.age}
      </h1>
      <button onClick={btnChanged}>CLICK TO CHANGE</button>
    </div>
  );
};

export default App;
