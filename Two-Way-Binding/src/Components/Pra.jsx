import React from 'react'
import { useState } from 'react'

const Pra = () => {
  const [title, setTitle] = useState('')
  const SubmitHandler=(e)=>{
    e.preventDefault();
    console.log('Submit',title)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <input type="text" placeholder='Enter your Age'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Pra
