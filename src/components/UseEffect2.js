import React,{useState, useEffect} from 'react'

const UseEffect2 = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [display, setDisplay] = useState(true)

const logMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
}

    useEffect(() => {
      window.addEventListener('mousemove' ,logMousePosition)
   }, [])
    
  return (
    <div>
 {/* <div>   X- {x} Y - {y} </div> */}
      <button onClick={() => setDisplay(!display)}>Display</button>
      {display &&    `X- ${x} Y - ${y}` }
    </div>
  )
}

export default UseEffect2