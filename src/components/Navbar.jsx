import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Navbar() {
  console.log(
    "I'm printing from inside of navbar component in UseCallback hook",
  );
  const {ID}= useContext(AppContext)

  return (
    <>
      <br />
      <p>ID printed using useContext is here {ID}</p>
      <br />
      <h4>I'm a navbar component in UseCallback hook</h4>
      <br />
      <br />
    </>
  );
}
export default React.memo(Navbar);
