import { useContext, useEffect, useState } from 'react';
import CounterContext from '../../contextStore';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  useEffect(() => {
    // if (!state.apiData)
    //   fetchApi()
    return () => {
      console.log('Adios mundo')
      localStorage.removeItem('miVariable')
    };
  }, [])

  useEffect(() => {
    console.log('Se ha modificado el state')
  }, [state])

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment'})}>+</button>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
    </div>
  );
}

export default Counter;
