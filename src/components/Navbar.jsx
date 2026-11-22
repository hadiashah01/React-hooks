import React from "react";
function Navbar() {
  console.log(
    "I'm printing from inside of navbar component in UseCallback hook",
  );

  return (
    <>
      <br />
      <br />
      <h4>I'm a navbar component in UseCallback hook</h4>
      <br />
      <br />
    </>
  );
}
export default React.memo(Navbar);
