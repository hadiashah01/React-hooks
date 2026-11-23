import "./App.css";
import CallBackedFun from "./hooks/UseCallback";
import CountRendering from "./hooks/UseEffectHook";
import TestPrint from "./hooks/UseLayoutEffect";
import LocalStorageHook from "./hooks/UseLocalStorage";
import MemoizedFun from "./hooks/UseMemo";
import ReducerFN from "./hooks/UseReducer";
import PreventRendering from "./hooks/UseRef";
import UpdateStates from "./hooks/UseStateHook";

function App() {
  return (
    <>
      <UpdateStates />
      <CountRendering />
      <PreventRendering />
      <MemoizedFun />
      <CallBackedFun />
      <ReducerFN />
      <TestPrint />
      <LocalStorageHook/>
    </>
  );
}

export default App;
