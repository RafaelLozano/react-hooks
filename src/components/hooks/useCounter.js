import { useState } from 'react'

const useCounter = ({initialState = 10, factor=1}) => {
    const [state, setState] = useState(initialState)

    const increment = () => {
        setState(state + factor)
    }
    const decrement = () => {
        setState(state - factor)

    }

    return{state,increment,decrement}
}

export default useCounter
