import React from 'react'
import Pra from './Components/Pra'

const App = () => {
  // const SubmitHandler=(e)=>{
  //   e.preventDefault();
  //   console.log('Button is clicked');
  // }
  return (
    <div>
      {/* <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
      <input type="text" placeholder='Enter Your name'/>
      <input type="text" placeholder='Enter you age'/>
      <button>Submit</button>
      </form> */}
      <Pra/>
    </div>
  )
}

export default App

