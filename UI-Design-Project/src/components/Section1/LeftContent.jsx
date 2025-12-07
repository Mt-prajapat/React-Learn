import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Left1 from './left1'
import Left2 from './left2'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '>
      <Left1 />
      <Left2 />
    </div>
  )
}

export default LeftContent
