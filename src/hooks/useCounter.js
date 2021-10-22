import { useState } from 'react'

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)

    const increment = (increment) => {
        setCounter(counter + increment)
    }

    const reset = () => {
        setCounter(initialState)
    }

    const decrement = (decrement) => {
        setCounter(counter - decrement)
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}