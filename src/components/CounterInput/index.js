import { useState, useContext } from 'react';
import CounterContext from '../../contextStore';

const CounterInput = () => {
  const [conunterValue, setCounterValue] = useState('');
  const { dispatch } = useContext(CounterContext);

  const handleInputChange = (event) => {
    setCounterValue(event.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleInputChange} value={conunterValue} />
      <button onClick={() => dispatch({ type: 'set_counter', payload: conunterValue })}>Set counter</button>
    </>
  );
}

export default CounterInput;
