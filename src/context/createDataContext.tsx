// Define the types for the reducer and actions
import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

type ReducerType<S, A> = (state: S, action: A) => S;
type ActionCreatorType<S, A> = (
  dispatch: Dispatch<A>,
) => (...args: any[]) => void;
type ActionsType<S, A> = { [key: string]: ActionCreatorType<S, A> };

// Define the types for the context provider props
interface ProviderProps {
  children: ReactNode; // ReactNode represents any renderable React content
}

// Main function to create context and provider
export default function createDataContext<S, A>(
  reducer: ReducerType<S, A>,
  actions: ActionsType<S, A>,
  defaultValue: S,
) {
  // Define the context type explicitly to avoid TypeScript confusion
  const Context = createContext<{ state: S; [key: string]: any }>({
    state: defaultValue,
  });

  // Define the Provider component with an explicit return type
  const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: { [key: string]: (...args: any[]) => void } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
