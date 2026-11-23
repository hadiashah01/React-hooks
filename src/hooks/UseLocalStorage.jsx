import { useEffect, useState } from "react";
export default function LocalStorageHook() {
  const [fullName, setName] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : " ",
  );
  useEffect(() => {
    localStorage.setItem("username", fullName);
  }, [fullName]);
  return (
    <>
      <input
        type="text"
        value={fullName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br /> <br /> <h3>Welcome {fullName}</h3>
      <br /> <br />{" "}
    </>
  );
}
