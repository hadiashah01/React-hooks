import { useEffect,useState } from "react";

export default function CountRendering() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [count]);
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Browser is rendered {count} times</h1>
    </>
  );
}
