import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index';
import { toggleLog } from './actions/index'



function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(8))}>-</button>

        {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
        <button onClick={() => dispatch(toggleLog())}>Sign in?</button>
      </header>
    </div>
  );
}

export default App;
