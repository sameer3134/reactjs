import React, {useState, useEffect,useReducer } from 'react'
import axios from 'axios'

const initialstate = { 
    loading: true,
    error: '',
    post: {}
}
const reducer= (state,action) => {
    switch(action.type){
        case 'success':
            return {
                loading: false ,
                error : '',
                post: action.payload
            }
            case 'failure':
                return {
                    loading: false ,
                    error : 'went wrong',
                    post: {}
                } 
            default:
                return state    
    }
}
const UseReducerapi2 = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)
 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
       .then(response=>{
             dispatch({type: 'success', payload: response.data})
           } )
        .catch(error => {
            dispatch({type: 'failure'})
        })
      }, [])
  return (
    <div>
        {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default UseReducerapi2