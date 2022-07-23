import React,{useReducer} from 'react'

const UseReducer2 = () => {
    const initialstate= {
        firstCounter: 0,
        secondCounter: 10
    }
    const reducer = (state,action) => {
        switch (action.type) {
            case 'increment':
                return {...state,firstCounter : state.firstCounter + action.value}
                break;
            case 'decrement':
                return {...state,firstCounter : state.firstCounter - action.value}
                break;
                case 'increment2':
                    return {...state,secondCounter : state.secondCounter + action.valu  + action.value}
                    break;
                case 'decrement2':
                    return {...state, secondCounter : state.secondCounter - action.valu}
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
    <div>  count= {count.firstCounter} 
    count - {count.secondCounter}
    <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
    <button  onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
    <button onClick={() => dispatch({type:'increment2', valu:2, value: 1})} >Increment1</button>
    <button  onClick={() => dispatch({type:'decrement2', valu:2})}>Decrement1</button>
    <button onClick={() => dispatch({type:'increment', value:5})}>Incremente</button>
    <button  onClick={() => dispatch({type:'decrement', value:5})}>Decremente</button>
    <button  onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducer2