import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function CountRendering() {
  const { phone, fullname, dob, ID } = useContext(AppContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [count]);
  return (
    <>
      <br />
      <p>
        The data coming from Appcontext using usecontext hook is Name =
        {fullname} Id={ID} Phone ={phone} and dob is {dob}
      </p>
      <br />
      <br />
      <h1>Browser is rendered {count} times</h1>
    </>
  );
}
