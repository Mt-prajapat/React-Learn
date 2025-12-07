import React from 'react'

const Pra = () => {
  const SubmitHandler=(e)=>{
    e.preventDefault()
    console.log('Submit the Button')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <input type="text" placeholder='Enter your age'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Pra
