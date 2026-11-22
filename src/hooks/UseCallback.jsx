import { useCallback, useState } from "react";
import Navbar from "../components/Navbar";

export default function CallBackedFun() {
  const [count, setCount] = useState(0);
  const substractOne = () => {
    setCount((prev) => prev - 1);
  };
  const addOne = () => {
    setCount((prev) => prev + 1);
  };
  const anotherFun = useCallback(() => {}, []);
  return (
    <>
      {" "}
      <Navbar func={anotherFun} />
      <h2>{count}</h2>
      <button onClick={addOne}>+1</button>
      <br />
      <button onClick={substractOne}>-1</button>
    </>
  );
}
