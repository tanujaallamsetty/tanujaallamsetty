import React, { useEffect } from 'react'
import {useRef} from 'react'

const UseEffect = () => {
    const username = useRef();
    useEffect(()=>{
        username.current.focus();
    },[])
  return (
    <div>
    <input type="text" ref={username}/>
    <button>click</button>
      
    </div>
  )
}


export default UseEffect
