import React from 'react'
import { useState } from 'react'

const Usestate2 = () => {
    
    const [name, setName] = useState({first: '' , last: ''})
  return (
    <div>
        <form>
            <input type='text' value={name.first} onChange={e => setName({...name ,first: e.target.value})}/>
            <input type='text' value={name.last} onChange={e => setName({...name ,last: e.target.value})}/>
            <h2> {name.first}</h2>
            <h2> {name.last}</h2>
        </form>
        {JSON.stringify(name)}
    </div>
  )
}

export default Usestate2