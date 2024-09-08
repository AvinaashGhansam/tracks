import { Dispatch, ReactNode } from "react";

/**
 * A type definition for a reducer function
 * @template S - The state type
 * @template A - The action type
 * @param state - The current state
 * @param action - The current action
 * @returns The updated state after processing the action.
 */
export type ReducerType<S, A> = (state: S, action: A) => S;
/**
 * A type definition for an action creator function
 *
 * @template S - The state type.
 * @template A - The action type.
 * @param dispatch - The dispatch function to send actions to the reducer.
 * @returns A function that accepts any number of arguments.
 */
export type ActionCreatorType<S, A> = (
  dispatch: Dispatch<A>,
) => (...args: any[]) => void;
/**
 * A type definition for an object that maps action creator names to their functions
 * @template S - The state type.
 * @template A - The action type.
 */
export type ActionsType<S, A> = { [key: string]: ActionCreatorType<S, A> };

/**
 * The props expected by the Provider component.
 * @property {ReactNode} children - The child component that the Provider will render.
 */
export interface ProviderProps {
  children: ReactNode;
}
