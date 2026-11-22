import { useState, useMemo } from "react";
export default function MemoizedFun() {
  const [numb, setNum] = useState(0);
  const [count, setCount] = useState(0);
  function calcCube(num) {
    console.log("hi i was here from useMemo hook in calcCube function");

    return Math.pow(num, 3);
  }
  const substractOne = () => {
    setCount((prev) => prev - 1);
  };
  const addOne = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={addOne}>+1</button>
      <br />
      <button onClick={substractOne}>-1</button>
      <input
        type="text"
        value={numb}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <h4>Cube is {useMemo(() => calcCube(numb), [numb])}</h4>
    </>
  );
}
