import { useReducer } from 'react';
import Counter from './components/Counter';
import CounterTitle from './components/CounterTitle';
import CounterInput from './components/CounterInput';
import TodoList from './components/TodoList';
import counterReducer, { initialState } from './reducers/counter'
import { Provider } from './contextStore'

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <CounterTitle />
      <Counter />
      <CounterInput />
      <TodoList />
    </Provider>
  );
}

export default App;
