import { useLayoutEffect, useEffect } from "react";
export default function TestPrint() {
  useEffect(() => {
    console.log("I'm printing from useEffect hook ");
  });
  useLayoutEffect(() => {
    console.log("I'm printing from useLayoutEffect hook ");
  });

  return (
    <>
      <h2>THIS IS USE LAYOUT EFFECT HOOK HERE </h2> <br /> <br />
    </>
  );
}
