// setup data layer 
//we need this to track the basket 

import { createContext,useContext,useReducer } from "react";

//this is the data layer 
export const StateContext = createContext();

//Build a provider

export const StateProvider =({reducer,initialState,children}) =>{
  <StateContext.Provider value = {useReducer(reducer.initialState)}>
    {children}
  </StateContext.Provider>
}