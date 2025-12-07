import React, { useState } from 'react'
import Pra from './Components/Pra'
import Test from './Components/test'
import Pra1 from './Components/Pra1'
import Pra2 from './Components/Pra2'
import Pra3 from './Components/Pra3'

const App = () => {
  // const [a, setA] = useState(1);
  // const [name, setName] = useState('Manan')
  // const [array, setArray] = useState([12,23,34,45,56])
  // function changeA(){
  //   setA(2)
  //   setName('Manan Prajapat')
  //   setArray([21,32,43,54,65])
  // }

  const [num, setNum] = useState(0)
  function IncreaseNum(){
    setNum(num+1)
  }
  function DecreaseNum(){
    setNum(num-1)
  }
  function Increase5Num(){
    setNum(num+5)
  }
  function reset(){
    setNum(0)
  }
  return (
    // <div>
    //   <h1>Name of the person is {name}<br />Age of a person is {a} <br /> The array is {array}</h1>
    //   <button onClick={changeA}>Click It!</button>
    // </div>
    <>
    <div>
      <h1>{num}</h1>
      <button onClick={IncreaseNum}> Increase </button>
      <button onClick={DecreaseNum}> Decrease </button>
      <button onClick={Increase5Num}> Increase 5 </button>
      <button onClick={reset}> Reset </button>
    </div>

    <Pra/>
    <Test/>
    <Pra1/>
    <Pra2/>
    <Pra3/>
    </>
  )
}

export default App
