import { useState } from "react";

export default function UpdateStates() {
    const [count, setCount] = useState(0);
  const [brand, setBrand] = useState({
    name: "Ferrari",
    year: 2026,
    color: "red",
  });
  function inc() {
    setCount(count + 1);
  }
  function inc5() {
    setCount((prev) => prev + 5);
  }
  function dec() {
    setCount(count - 1);
  }
  function changeBrand() {
    setBrand({ name: "Buggati", year: 2027, color: "black" });
  }
  function changeColor() {
    setBrand({ ...brand, color: "green" });
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => inc()}>Increase</button> <br />
      <button onClick={() => inc5()}>Increase by 5</button> <br />
      <button onClick={() => dec()}>Decrease</button>
      <br />
      <br />
      <h2>{brand.name}</h2>
      <br />
      <p>
        Its a {brand.color} Roma from {brand.year}{" "}
      </p>
      <br />
      <button
        onClick={() => {
          changeBrand();
        }}
      >
        Change Brand
      </button>
      <br />
      <button
        onClick={() => {
          changeColor();
        }}
      >
        Change Color
      </button>
    </>
  );
}
