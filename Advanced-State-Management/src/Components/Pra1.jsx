import React, { useState } from 'react'

const Pra1 = () => {
  const [num, setNum] = useState({user:'Manan',age:20})
  const btnClicked=()=>{
    const newbtn = {...num};
    newbtn.user = 'Manan Prajapat'
    setNum(newbtn)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click this</button>
    </div>
  )
}

export default Pra1
