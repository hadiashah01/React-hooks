import { createContext } from "react";
export const AppContext = createContext();

export default function ContextProvider(props) {
  const student = {
    ID: 5236,
    name: "Hadia",
    phone: "+92 3671836487",
    dob: 1234,
  };
  <AppContext.Provider value={{student}} >{props.children}</AppContext.Provider>;
}
