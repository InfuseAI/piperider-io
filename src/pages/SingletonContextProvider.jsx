import { createContext, useState, useContext } from 'react';

// Create a context
const SingletonContext = createContext();

// Create a provider
export function SingletonContextProvider({ children }) {
  const [state, setState] = useState('singleton');

  // make sure state is only created once
  let contextValue = useContext(SingletonContext);
  if (!contextValue) {
    contextValue = { state, setState };
  }

  return (
    <SingletonContext.Provider value={contextValue}>
      {children}
    </SingletonContext.Provider>
  );
}

// Create a hook to use the SingletonContext, this is just to simplify using the context.
export function useSingletonContext() {
  return useContext(SingletonContext);
}