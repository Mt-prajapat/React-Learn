import React, { useEffect, useState } from 'react'

const Pra = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(10)
  function aChanging(){
    console.log('Value of A is changing');
  }
  function bChanging(){
    console.log('Value of B is changing');
  }
  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
    
  },[b])
  return (
    <div>
      <h3>A {a}</h3>
      <h3>B {b}</h3>
      <button onClick={()=>{
        setA(a+1)
      }}>A changing</button>
      <button onClick={()=>{
        setB(b+10)
      }}>B changing</button>
    </div>
  )
}

export default Pra
