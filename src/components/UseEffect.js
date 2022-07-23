import React,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updatung')
      document.title = `you clich ${count} times`
    },[count] )
    

  return (
    <div>
        <input type='text' value={name} onChange={e =>setName(e.target.value)} />
        <button onClick={()=> setCount(count+1)}>click {count} times</button>
    </div>
  )
}

export default UseEffect