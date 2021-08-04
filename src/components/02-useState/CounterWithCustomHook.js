import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterWithCustomHook = () => {
    const {state,increment,decrement,reset}=useCounter({factor:1})
    
    return (
        <div>
            <h1>Counter with custom hook</h1>
            <hr/>
            <p>Counter: {state}</p>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default CounterWithCustomHook
