import { useContext } from 'react';
import CounterContext from '../../contextStore';

const CounterTitle = () => {
  const { state } = useContext(CounterContext);
  return <h1>{state.counter}</h1>
}

export default CounterTitle;
