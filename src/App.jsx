import "./App.css";
import CountRendering from "./hooks/UseEffectHook";
import MemoizedFun from "./hooks/UseMemo";
import PreventRendering from "./hooks/UseRef";
import UpdateStates from "./hooks/UseStateHook";

function App() {
  return (
    <>
      <UpdateStates />
      <CountRendering />
      <PreventRendering />
      <MemoizedFun/>
    </>
  );
}

export default App;
