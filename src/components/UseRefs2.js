import React, {useRef, useEffect,useState} from 'react'

const UseRefs2 = () => {
    const [timer, setTimer] = useState(0)
    const intervalref = useRef()
    useEffect(() => {
      intervalref.current= setInterval(() => {
         setTimer(prevTimer => prevTimer + 1) 
      }, 1000)
      return () => {
        clearInterval(intervalref.current)
      }
    }, [])
    
  return (
    <div>
        {timer}
        <button onClick={()=>  clearInterval(intervalref.current)}>click</button>
    </div>
  )
}

export default UseRefs2