import "./App.css";
import CountRendering from "./hooks/UseEffectHook";
import PreventRendering from "./hooks/UseRef";
import UpdateStates from "./hooks/UseStateHook";

function App() {
  return (
    <>
      <UpdateStates />
      <CountRendering />
      <PreventRendering />
    </>
  );
}

export default App;
