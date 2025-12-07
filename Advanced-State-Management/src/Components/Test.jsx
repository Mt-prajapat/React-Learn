import React, { useState } from 'react'

const Test = () => {
  const [num, setNum] = useState(10)
  function increment10(){
    setNum(num+10)
  }
  function reset(){
    setNum(10)
  }
  const btnClicked=()=>{
    console.log('Button is clicked')
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClickCapture={btnClicked} onClick={increment10}>Click</button>
      <button onClickCapture={btnClicked} onClick={reset}>Reset</button>
    </div>
  )
}

export default Test
