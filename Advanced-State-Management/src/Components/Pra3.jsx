import React, { useState } from 'react'

const Pra3 = () => {
  const [num, setNum] = useState(10)
  const btnClicked=()=>{
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click It!</button>
    </div>
  )
}

export default Pra3
