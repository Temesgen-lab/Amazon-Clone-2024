import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

// DataContext - For managing global state (basket, etc.)
export const DataContext = createContext();

// DataProvider Component to provide the global state
export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
