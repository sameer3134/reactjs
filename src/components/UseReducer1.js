import React, {useReducer} from 'react'

const UseReducer1 = () => {
    const initialstate= 0
    const reducer = (state,action) => {
        switch (action) {
            case 'increment':
                return state + 1
                break;
            case 'decrement':
                return state - 1
                break;
            case 'reset':
                return initialstate 
                break;
            default:
                return state
                break;
        }
    }
    const [count, dispatch]=useReducer(reducer, initialstate)
  return (
   
    <div>
        count= {count}
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button  onClick={() => dispatch('decrement')}>Decrement</button>
        <button  onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer1