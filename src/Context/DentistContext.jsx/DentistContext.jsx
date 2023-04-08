import React, { createContext, useReducer } from "react";

export const DentistContext = createContext();

const initialState = { users: [] };

const dentistReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const DentistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);
  return (
    <DentistContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistContext.Provider>
  );
};
