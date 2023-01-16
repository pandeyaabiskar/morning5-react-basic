import './counterlayout.css'
import {useState} from 'react'

function CounterLayout() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const decreaseValue = () => {
    // count--;
    setCount(prev => prev - 1)
    console.log(count)
  }
  const increaseValue = () => {
    // count++;
    setCount(prev => prev + 1)
    console.log(count)
  }

  return (
    <>
      <h1 className='title'>Counter</h1>
      <div className='counter'>
          <button onClick={decreaseValue}>Decrement</button>
        <h2>{ count }</h2>
        <button onClick={increaseValue}>Increment</button>
      </div>
    </>
  );
}

export default CounterLayout;
