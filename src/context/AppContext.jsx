import { createContext } from "react";
export const AppContext = createContext();

export default function ContextProvider(props) {
  const ID = 5236;
  const fullname = "Hadia";
  const phone = "+92 3671836487";
  const dob = 1234;
  return (
    <AppContext.Provider value={{ phone, fullname, dob, ID }}>
      {props.children}
    </AppContext.Provider>
  );
}
