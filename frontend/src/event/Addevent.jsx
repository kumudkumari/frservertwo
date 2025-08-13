import React from 'react'
import { useState } from 'react';

const Addevent = () => {
  const [age, setAge] = useState(0);
  return (
    <div className='counter-countainer'>
      <h1>counter</h1>
    <h1>you have click {age} times</h1>    
    
    <button id='btn' onClick={()=>{setAge(age+1)}}>click me</button>
      
    </div>
    

  )
}

export default Addevent
