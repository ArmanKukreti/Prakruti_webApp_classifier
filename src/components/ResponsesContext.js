import React, { createContext, useContext, useState } from 'react';

const ResponsesContext = createContext();

export function useResponses() {
  return useContext(ResponsesContext);
}

export function ResponsesProvider({ children }) {
  const [responses, setResponses] = useState([]);

  const addResponse = (responseText) => {
    setResponses([...responses, responseText]);
  };

  return (
    <ResponsesContext.Provider value={{ responses, addResponse }}>
      {children}
    </ResponsesContext.Provider>
  );
}
