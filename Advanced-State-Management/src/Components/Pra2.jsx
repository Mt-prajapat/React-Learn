import React, { useState } from 'react'

const Pra2 = () => {
  const [num, setNum] = useState([12,23,34,45,56])
  const btnClicked=()=>{
    const newNum = [...num];
    newNum.push(99)
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default Pra2
