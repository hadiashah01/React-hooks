import { useReducer } from "react";
export default function ReducerFN() {
  const initialVal = { Count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { Count: state.Count + 1 };
      case "dec":
        return { Count: state.Count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialVal);
  return (
    <>
      <h2>{state.Count} in UseReducer Hook </h2>
      <button onClick={()=>dispatch({ type: "inc" })}>+1</button>
      <br />
      <button onClick={()=>dispatch({ type: "dec" })}>-1</button>
    </>
  );
}
