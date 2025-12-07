import React from 'react'
import { useState } from 'react'
import Pra from './Components/Pra'

const App = () => {
  // const [title, setTitle] = useState('')
  
  // const SubmitHandler=(e)=>{
  //   e.preventDefault()
  //   console.log('Data is Submit',title)
  //   setTitle('')
  // }
  return (
    <div>
      {/* <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <input 
        type="text" 
        placeholder='Enter your age'
        value={title}
        onChange={(e)=>{
          console.log(e.target.value)
        }}
        />
        <button>Submit</button>
      </form> */}
      <Pra/>
    </div>
  )
}

export default App
