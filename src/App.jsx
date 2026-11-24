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
  const [Name, setName] = LocalStorageHook("username", " ");
  return (
    <>
      <UpdateStates />
      <CountRendering />
      <PreventRendering />
      <MemoizedFun />
      <CallBackedFun />
      <ReducerFN />
      <TestPrint />
      <>
        <input
          type="text"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br /> <br /> <h3>Welcome {Name}</h3>
        <br /> <br />
      </>
    </>
  );
}

export default App;
