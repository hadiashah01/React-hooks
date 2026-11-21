import { useState } from "react";
import "./App.css";
import CountRendering from "./hooks/UseEffectHook";
import UpdateStates from "./hooks/UseStateHook";

function App() {
  return (
    <>
      <UpdateStates />
      <CountRendering />
    </>
  );
}

export default App;
