import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Right1 from './Right1'
import Right2 from './Right2'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img}/>
      <Right2 color={props.color} id={props.id} tag = {props.tag}/>
      
    </div>
  )
}

export default RightCard
