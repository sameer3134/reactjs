import React from 'react'
import { useState } from 'react'
const Usestate = () => {
    const initialcount =0
    const [count, Setcount] = useState(initialcount)
  return (
    <div>
        Count:{count}
<button onClick={() => Setcount(initialcount)}>Reset </button>
<button onClick={() => Setcount(count +1)}> add </button>
<button onClick={() => Setcount(count -1)}> Sub </button>
    </div>
  )
}

export default Usestate