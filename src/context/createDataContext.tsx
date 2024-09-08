import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ActionsType, ProviderProps, ReducerType } from "./types";

/**
 * Creates a context and provider for managing global state.
 *
 * This function generates a React context and a provider component
 * that uses a reducer to manage state. Action creators are automatically
 * bound to the dispatch function.
 *
 * @template S - The state type.
 * @template A - The action type.
 * @param reducer - The reducer function that handles state changes.
 * @param actions - An object containing action creators for dispatching actions.
 * @param defaultValue - The initial state value.
 * @returns An object containing the context and the provider component.
 */
export default function createDataContext<S, A>(
  reducer: ReducerType<S, A>,
  actions: ActionsType<S, A>,
  defaultValue: S,
) {
  const Context = createContext<{ state: S; [key: string]: any }>({
    state: defaultValue,
  });

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
