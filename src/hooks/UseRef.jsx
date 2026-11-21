import { useState, useEffect, useRef } from "react";
export default function PreventRendering() {
  const [count, setCount] = useState(0);
  const Value = useRef(0);

  useEffect(() => {
    Value.current = Value.current + 1;
  });
  const substractOne = () => {
    setCount((prev) => prev - 1);
  };
  const addOne = () => {
    setCount((prev) => prev + 1);
  };
  const btnclicked = () => {
    inp.current.style.border = "6px solid blue";
  };

  const inp = useRef();

  return (
    <>
      <br />
      <br />
      <h1>Rendered Count is {Value.current} with UseRef</h1>
      <h2>{count}</h2>
      <button onClick={addOne}>+1</button>
      <br />
      <button onClick={substractOne}>-1</button>
      <br />
      <br />
      //taking reference of dom elements
      <input type="text" ref={inp} />
      <button onClick={btnclicked}>change Color</button>
      <br />
    </>
  );
}
