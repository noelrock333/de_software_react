import { createContext } from 'react';

const CounterContext = createContext({});

export const Provider = CounterContext.Provider;

export default CounterContext;