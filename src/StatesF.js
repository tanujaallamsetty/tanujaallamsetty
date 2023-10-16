import React,{useState} from 'react'

function StatesF() {
    const [name,setName] = useState("operation");
    const [count,setCount] = useState(0);
    const handleIncrement = ()=>{
        setName("Incrementing")
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setName("Decrementing")
         
        if(count<1){
            return"";
        }else{
            setCount(count-1)
        }
        
    }
  return (
    <div>
        <h1>{name}</h1>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>

    
      
    </div>
  )
}

export default StatesF
