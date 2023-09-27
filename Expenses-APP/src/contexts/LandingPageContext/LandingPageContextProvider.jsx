import React, { useState, useReducer } from 'react';
import { MainContext } from './landingPageContext';
import { initialState, mainReducer } from './landingPageReducer';

export default function LandingPageContext({ children }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
