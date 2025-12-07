import React, { useEffect, useState } from 'react'
import Pra from './Components/Pra'

const App = () => {
  // const [num, setNum] = useState(0)
  // const [num1, setNum1] = useState(100)
  // useEffect(function(){
  //   console.log('Console is working')
  // },[num])
  return (
    <div>
      {/* <h3>num {num}</h3>
      <h3>num1 {num1}</h3>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum1(num1+10)
      }}>Click</button> */}
      <Pra/>
    </div>
  )
}

export default App
