import React, {useRef,useState} from 'react'

const  UseRef = ()=>{
    const [name,setName] = useState("");
    const myname =  useRef();
    const handleInput=()=>{
        const name=(myname.current.value);
        setName(name);
        
    }
  return (
    <div>
        {/* /* <input type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/>*/  }
        <input type='text' placeholder='enter your name' ref={myname}/>
        <button onClick={handleInput}>click</button>
        <text>{name}</text>

      
    </div>
  )
}

export default UseRef;
