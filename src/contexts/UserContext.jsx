import { createContext, useReducer } from "react";
import { userData } from "../constants/userData";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [state, dispacth] = useReducer(userReducer, userData)

  return (
    <UserContext.Provider value={{ state, dispacth}}>
      { children }
    </UserContext.Provider>
  );
}
