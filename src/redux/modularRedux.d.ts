/// <reference types="redux" />
import { Action, Unsubscribe } from "redux";

type RestParams<TFunction> = TFunction extends (arg: any, ...args: infer A) => void ? A : never;
type ReactReduxHook<TState> = () => TState;
type Reducer<TState> = (state: TState, payload: any) => TState;
type SetterDispatcher<TState> = (state: TState) => PayloadAction<TState>;

interface Reducers<TState> {[reducerName: string]: Reducer<TState>;}
interface PayloadAction<TPayload> extends Action<string> {payload: TPayload;}

type VirtualStore<TState> = {
  getState: () => TState;
  subscribe: (callback: (state: TState) => void) => Unsubscribe;
};

type Dispatcher<TReducer> = (
  ...args: RestParams<TReducer>
) => PayloadAction<RestParams<TReducer>[0]>;

type Dispatchers<TReducers> = {
  [K in keyof TReducers]: Dispatcher<TReducers[K]>;
};

export function useRedux<TState, TReducers extends Reducers<TState>>(
  reduxStorePropertyName: string,
  initialState: TState,
  reducers: TReducers
): [
  ReactReduxHook<TState>,
  Readonly<Dispatchers<TReducers>>,
  VirtualStore<TState>
];
